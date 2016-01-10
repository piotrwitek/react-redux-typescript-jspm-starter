var Promise = require('rsvp').Promise;
var asp = require('rsvp').denodeify;
var request = require('request');
var zlib = require('zlib');
var tar = require('tar');
var url = require('url');
var fs = require('graceful-fs');
var path = require('path');
var mkdirp = require('mkdirp');
var Npmrc = require('./npmrc');
var auth = require('./auth');

var nodeConversion = require('./node-conversion');
var Npmrc = require('./npmrc');

var defaultRegistry = 'https://registry.npmjs.org';

function clone(a) {
  var b = {};
  for (var p in a) {
    if (a[p] instanceof Array)
      b[p] = [].concat(a[p]);
    else if (typeof a[p] == 'object')
      b[p] = clone(a[p]);
    else
      b[p] = a[p];
  }
  return b;
}

var NPMLocation = function(options, ui) {
  this.ui = ui;
  this.name = options.name;

  var npmrc = new Npmrc();

  this.registryURL = function (scope) {
    return scope && npmrc.getRegistry(scope) || options.registry || npmrc.getRegistry() || defaultRegistry;
  };

  this.tmpDir = options.tmpDir;
  this.remote = options.remote;
  this.strictSSL = 'strictSSL' in options ? options.strictSSL : true;

  // cache versioning scheme used for patches
  // this.versionString = options.versionString + '.1';

  if (options.username && !options.auth)
    options.auth = auth.encodeCredentials(options.username, options.password);
  // NB eventual auth deprecation
  // delete options.username;
  // delete options.password;

  if (options.authToken)
    this.auth = { token: options.authToken };
  else if (options.auth)
    this.auth = auth.decodeCredentials(options.auth);
  else
    this.auth = npmrc.getAuth(this.registryURL());

  // only alwaysAuth when the registryURL is not the defaultRegistry
  // otherwise we just auth for scopes
  this.alwaysAuth = this.registryURL() != defaultRegistry;
};

NPMLocation.configure = function(config, ui) {
  config.remote = config.remote || 'https://npm.jspm.io';

  var npmrc = new Npmrc();
  var npmrcAuth;

  var registry;

  return Promise.resolve()
  .then(function() {
    var customMsg;
    if (config.registry && (config.auth || config.authToken))
      customMsg = 'a custom registry and credentials';
    else if (config.registry)
      customMsg = 'a custom registry';
    else if (config.auth || config.authToken)
      customMsg = 'custom credentials';

    if (customMsg)
      return ui.confirm('Currently using ' + customMsg + '. Would you like to reset to npmrc defaults?', false);
  })
  .then(function(reset) {
    if (reset) {
      delete config.registry;
      delete config.auth;
      delete config.authToken;
    }
    return ui.input('npm registry', config.registry || npmrc.getRegistry() || defaultRegistry);
  })
  .then(function(_registry) {
    registry = _registry;
    if (registry != (npmrc.getRegistry() || defaultRegistry))
      config.registry = registry.replace(/\/$/, '');

    npmrcAuth = npmrc.getAuth(config.registry);

    if (config.auth || config.authToken)
      return ui.confirm('Custom authentication currently configured, reconfigure credentials?', false);
    else if (npmrcAuth)
      return ui.confirm('Currently reading credentials from npmrc, configure custom authentication?', false);
    else
      return ui.confirm('No authentication configured, configure credentials?', false);
  })
  .then(function(doAuth) {
    if (!doAuth)
      return;

    return auth.configureCredentials(registry,
        config.authToken && { token: config.authToken } || config.auth && auth.decodeCredentials(config.auth) || npmrcAuth, ui)
    .then(function(_auth) {
      delete config.auth;
      delete config.authToken;

      if (_auth.token)
        config.authToken = _auth.token;
      else if (_auth.username && _auth.password)
        config.auth = auth.encodeCredentials(_auth);
    });
  })
  .then(function() {
    return config;
  });
};

NPMLocation.packageFormat = /^@[^\/]+\/[^\/]+|^[^@\/][^\/]+/;

NPMLocation.prototype = {

  lookup: function(repo) {
    var self = this;

    var newLookup = false;
    var lookupCache;
    var latestKey = 'latest';
    var repoPath = repo[0] == '@' ? '@' + encodeURIComponent(repo.substr(1)) : encodeURIComponent(repo);

    var doAuth = this.alwaysAuth || repo[0] == '@';

    return asp(fs.readFile)(path.resolve(self.tmpDir, repo + '.json'))
    .then(function(lookupJSON) {
      lookupCache = JSON.parse(lookupJSON.toString());
    }).catch(function(e) {
      if (e.code == 'ENOENT' || e instanceof SyntaxError)
        return;
      throw e;
    })
    .then(function() {
      var scope;
      if (repo[0] === '@') {
        var scopeMatch = repo.match(/^(@.*)\//);
        if (scopeMatch[1]) {
          scope = scopeMatch[1];
        }
      }
      return asp(request)(auth.injectRequestOptions({
        uri: self.registryURL(scope) + '/' + repoPath,
        strictSSL: self.strictSSL,
        headers: lookupCache ? {
          'if-none-match': lookupCache.eTag
        } : {}
      }, doAuth && self.auth)).then(function(res) {
        if (res.statusCode == 304)
          return { versions: lookupCache.versions,
                   latest: lookupCache.latest };

        if (res.statusCode == 404)
          return { notfound: true };

        if (res.statusCode == 401)
          throw 'Invalid authentication details. Run %jspm registry config ' + self.name + '% to reconfigure.';

        if (res.statusCode != 200)
          throw 'Invalid status code ' + res.statusCode;

        var versions = {};
        var latest;
        var packageData;

        try {
          var json = JSON.parse(res.body);
          var distTags = json['dist-tags'] || {};
          packageData = json.versions;
          latest = distTags[latestKey];
        }
        catch(e) {
          throw 'Unable to parse package.json';
        }

        for (var v in packageData) {
          if (packageData[v].dist && packageData[v].dist.shasum)
            versions[v] = {
              hash: packageData[v].dist.shasum,
              meta: packageData[v],
              stable: !packageData[v].deprecated
            };
        }

        if (res.headers.etag) {
          newLookup = true;
          lookupCache = {
            eTag: res.headers.etag,
            versions: versions,
            latest: latest,
          };
        }

        return { versions: versions,
                 latest: latest };
      });
    })
    .then(function(response) {
      // save lookupCache
      if (newLookup) {
        var lookupJSON = JSON.stringify(lookupCache);
        var outputPath = path.resolve(self.tmpDir, repo + '.json');
        return asp(mkdirp)(path.dirname(outputPath))
        .then(function() {
          return asp(fs.writeFile)(outputPath, lookupJSON);
        })
        .then(function() {
          return response;
        });
      }

      return response;
    });
  },

  getPackageConfig: function(repo, version, hash, pjson) {
    if (!pjson)
      throw 'Package.json meta not provided in endpoint request';

    if (hash && pjson.dist.shasum != hash)
      throw 'Package.json lookup hash mismatch';

    return clone(pjson);
  },

  processPackageConfig: function(pjson, packageName) {
    if (pjson.jspmNodeConversion === false)
      return pjson;

    // peer dependencies are just dependencies in jspm
    pjson.dependencies = pjson.dependencies || {};
    if (pjson.peerDependencies) {
      for (d in pjson.peerDependencies)
        pjson.dependencies[d] = pjson.peerDependencies[d];
    }

    // warn if using jspm-style dependencies at this point
    for (var d in pjson.dependencies)
      if (!pjson.dependencies[d].match(/^(https?|git)[:+]/) && pjson.dependencies[d].indexOf(':') > 0)
        throw 'Package.json dependency %' + d + '% set to `' + pjson.dependencies[d] + '`, which is not a valid dependency format for npm.'
          + '\nIt\'s advisable to publish jspm-style packages to GitHub or another `registry` so conventions are clear.';
          + '\nTo skip npm compatibility install with %jspm install ' + packageName + '-o "{jspmNodeConversion: false}"%.'


    pjson.dependencies = nodeConversion.parseDependencies(pjson.dependencies, this.ui);

    pjson.format = pjson.format || 'cjs';

    // json mains become plugins
    if (pjson.main && typeof pjson.main == 'string' && pjson.main.substr(pjson.main.length - 5, 5) == '.json') {
      pjson.main += '!systemjs-json';
      pjson.dependencies['systemjs-json'] = nodeConversion.jsonPlugin;
    }

    // ignore directory flattening for NodeJS, as npm doesn't do it
    // we do allow if there was an override through the jspm property though
    if (!pjson.jspm || !pjson.jspm.directories)
      delete pjson.directories;

    // ignore node_modules by default when processing
    if (!(pjson.ignore instanceof Array))
      pjson.ignore = [];
    pjson.ignore.push('node_modules');

    if (pjson.files && pjson.files instanceof Array && pjson.files.indexOf('package.json') == -1)
      pjson.files.push('package.json');


    // if there is a "browser" object, convert it into map config for browserify support
    if (typeof pjson.browserify == 'string')
      pjson.main = pjson.browserify;
    if (typeof pjson.browser == 'string')
      pjson.main = pjson.browser;

    if (typeof pjson.browser == 'object') {
      pjson.map = pjson.map || {};
      for (var b in pjson.browser) {
        var mapping = pjson.browser[b];

        if (mapping === false) {
          mapping = '@empty';
        }
        else if (typeof mapping == 'string') {
          if (b.substr(b.length - 3, 3) == '.js')
            b = b.substr(0, b.length - 3);
          if (mapping.substr(mapping.length - 3, 3) == '.js')
            mapping = mapping.substr(0, mapping.length - 3);

          // we handle relative maps during the build phase
          if (b.substr(0, 2) == './')
            continue;
        }
        else
          continue;

        pjson.map[b] = pjson.map[b] || mapping;
      }
    }

    return pjson;
  },

  download: function(repo, version, hash, versionData, outDir) {
    var self = this;

    var doAuth = this.alwaysAuth || repo[0] == '@';

    // Forcing protocol and port matching for tarballs on the same host as the
    // registry is taken from npm at
    // https://github.com/npm/npm/blob/50ce116baac8b6877434ace471104ec8587bab90/lib/cache/add-named.js#L196-L208
    var tarball = url.parse(versionData.dist.tarball);
    var registry = url.parse(this.registryURL());

    if (tarball.hostname === registry.hostname && tarball.protocol !== registry.protocol) {
      tarball.protocol = registry.protocol;
      tarball.port = registry.port;
    }
    tarball = url.format(tarball);

    return new Promise(function(resolve, reject) {
      request(auth.injectRequestOptions({
        uri: tarball,
        headers: { 'accept': 'application/octet-stream' },
        strictSSL: self.strictSSL
      }, doAuth && self.auth))
      .on('response', function(npmRes) {

        if (npmRes.statusCode != 200)
          return reject('Bad response code ' + npmRes.statusCode);

        if (npmRes.headers['content-length'] > 50000000)
          return reject('Response too large.');

        npmRes.pause();

        var gzip = zlib.createGunzip();

        npmRes
        .pipe(gzip)
        .pipe(tar.Extract({
          path: outDir, 
          strip: 1, 
          filter: function() {
            return !this.type.match(/^.*Link$/);
          }
        }))
        .on('error', reject)
        .on('end', resolve);

        npmRes.resume();
      })
      .on('error', function(error) {
        if (typeof error == 'string') {
          error = new Error(error);
          error.hideStack = true;
        }
        error.retriable = true;
        reject(error);
      });
    });
  },

  build: function(pjson, dir) {
    if (pjson.jspmNodeConversion === false)
      return;

    // apply static conversions
    return nodeConversion.convertPackage(pjson, dir);
  }
};

module.exports = NPMLocation;
