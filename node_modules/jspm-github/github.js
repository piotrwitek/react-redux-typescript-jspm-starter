var fs = require('graceful-fs');
var path = require('path');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var request = require('request');
var expandTilde = require('expand-tilde');

var Promise = require('rsvp').Promise;
var asp = require('rsvp').denodeify;

var tar = require('tar');
var zlib = require('zlib');

var yauzl = require('yauzl');

var semver = require('semver');

var which = require('which');

function extend(dest, src) {
  for (var key in src) {
    dest[key] = src[key]
  }

  return dest;
}

try {
  var netrc = require('netrc')();
}
catch(e) {}

var execGit = require('./exec-git');

function createRemoteStrings(auth, hostname) {
  var authString = auth ? (encodeURIComponent(auth.username) + ':' + encodeURIComponent(auth.password) + '@') : '';
  hostname = hostname || 'github.com';

  this.remoteString = 'https://' + authString + hostname + '/';

  if (hostname == 'github.com')
    this.apiRemoteString = 'https://' + authString + 'api.github.com/';

  // Github Enterprise
  else
    this.apiRemoteString = 'https://' + authString + hostname + '/api/v3/';
}

// avoid storing passwords as plain text in config
function encodeCredentials(auth) {
  return new Buffer(encodeURIComponent(auth.username) + ':' + encodeURIComponent(auth.password)).toString('base64');
}
function decodeCredentials(str) {
  var auth = new Buffer(str, 'base64').toString('ascii').split(':');
  return {
    username: decodeURIComponent(auth[0]),
    password: decodeURIComponent(auth[1])
  };
}

function readNetrc(hostname) {
  hostname = hostname || 'github.com';
  var creds = netrc[hostname];

  if (creds) {
    return {
      username: creds.login,
      password: creds.password
    };
  }
}

var GithubLocation = function(options, ui) {

  // ensure git is installed
  try {
    which.sync('git');
  }
  catch(ex) {
    throw 'Git not installed. You can install git from `http://git-scm.com/downloads`.';
  }

  this.name = options.name;

  this.max_repo_size = (options.maxRepoSize || 0) * 1024 * 1024;

  this.versionString = options.versionString + '.1';

  // Give the environment precedence over options object
  if(process.env.JSPM_GITHUB_AUTH_TOKEN) {
    options.auth = process.env.JSPM_GITHUB_AUTH_TOKEN;
  } else if (options.username && !options.auth) {
    options.auth = encodeCredentials(options);
    // NB deprecate old auth eventually
    // delete options.username;
    // delete options.password;
  }

  if (typeof options.auth == 'string') {
    this.auth = decodeCredentials(options.auth);
  }
  else {
    this.auth = readNetrc(options.hostname);
  }

  this.ui = ui;

  this.execOpt = {
    cwd: options.tmpDir,
    timeout: options.timeout * 1000,
    killSignal: 'SIGKILL',
    maxBuffer: this.max_repo_size || 2 * 1024 * 1024,
    env: extend({}, process.env)
  };

  this.defaultRequestOptions = {
    strictSSL: 'strictSSL' in options ? options.strictSSL : true
  };

  if (!this.defaultRequestOptions.strictSSL) {
    this.execOpt.env.GIT_SSL_NO_VERIFY = '1'
  }

  var self = this, envMap = {
    ca: 'GIT_SSL_CAINFO',
    cert: 'GIT_SSL_CERT',
    key: 'GIT_SSL_KEY'
  };

  ['ca', 'cert', 'key'].forEach(function(key) {
    if (key in options) {
      var path = expandTilde(options[key]);
      self.execOpt.env[envMap[key]] = path;
      self.defaultRequestOptions[key] = fs.readFileSync(path, 'ascii');
    }
  });

  this.remote = options.remote;

  createRemoteStrings.call(this, this.auth, options.hostname);
};

function clearDir(dir) {
  return new Promise(function(resolve, reject) {
    fs.exists(dir, function(exists) {
      resolve(exists);
    });
  })
  .then(function(exists) {
    if (exists)
      return asp(rimraf)(dir);
  });
}

function prepDir(dir) {
  return clearDir(dir)
  .then(function() {
    return asp(mkdirp)(dir);
  });
}

// check if the given directory contains one directory only
// so that when we unzip, we should use the inner directory as
// the directory
function checkStripDir(dir) {
  return asp(fs.readdir)(dir)
  .then(function(files) {
    if (files.length > 1)
      return dir;

    if (!files.length)
      return dir;

    var dirPath = path.resolve(dir, files[0]);

    return asp(fs.stat)(dirPath)
    .then(function(stat) {
      if (stat.isDirectory())
        return dirPath;

      return dir;
    });
  });
}

function configureCredentials(config, ui) {
  var auth = {};

  return Promise.resolve()
  .then(function() {
    ui.log('info', 'If using two-factor authentication or to avoid using your password you can generate an access token at %https://' + (config.hostname || 'github.com') + '/settings/tokens%. Ensure it has `public_repo` scope access.');
    return ui.input('Enter your GitHub username');
  })
  .then(function(username) {
    auth.username = username;
    if (auth.username)
      return ui.input('Enter your GitHub password or access token', null, true);
  })
  .then(function(password) {
    auth.password = password;
    if (!auth.username)
      return false;

    return ui.confirm('Would you like to test these credentials?', true);
  })
  .then(function(test) {
    if (!test)
      return true;

    return Promise.resolve()
    .then(function() {
      var remotes = {};
      createRemoteStrings.call(remotes, auth, config.hostname);

      return asp(request)({
        uri: remotes.apiRemoteString + 'user',
        headers: {
          'User-Agent': 'jspm',
          'Accept': 'application/vnd.github.v3+json'
        },
        followRedirect: false,
        strictSSL: 'strictSSL' in config ? config.strictSSL : true
      });
    })
    .then(function(res) {
      if (res.statusCode == 401) {
        ui.log('warn', 'Provided GitHub credentials are not authorized, try re-entering your password or access token.');
      }
      else if (res.statusCode != 200) {
        ui.log('warn', 'Invalid response code, %' + res.statusCode + '%');
      }
      else {
        ui.log('ok', 'GitHub authentication is working successfully.');
        return true;
      }
    }, function(err) {
      ui.log('err', err.stack || err);
    });
  })
  .then(function(authorized) {
    if (!authorized)
      return ui.confirm('Would you like to try new credentials?', true)
      .then(function(redo) {
        if (redo)
          return configureCredentials(config, ui);
        return encodeCredentials(auth);
      });
    else if (auth.username)
      return encodeCredentials(auth);
    else
      return null;
  });
}

function checkRateLimit(headers) {
  if (headers.status.match(/^401/))
    throw 'Unauthorized response for GitHub API.\n' +
      'Use %jspm registry config github% to reconfigure the credentials, or update them in your ~/.netrc file.';
  if (headers.status.match(/^406/))
    throw 'Unauthorized response for GitHub API.\n' +
      'If using an access token ensure it has public_repo access.\n' +
      'Use %jspm registry config github% to configure the credentials, or add them to your ~/.netrc file.';

  if (headers['x-ratelimit-remaining'] != '0')
    return;

  var remaining = (headers['x-ratelimit-reset'] * 1000 - new Date(headers.date).getTime()) / 60000;

  if (this.auth)
    return Promise.reject('\nGitHub rate limit reached, with authentication enabled.' +
        '\nThe rate limit will reset in `' + Math.round(remaining) + ' minutes`.');

  var err = new Error('GitHub rate limit reached.');
  err.config = true;
  err.hideStack = true;

  return Promise.reject(err);
}


// static configuration function
GithubLocation.configure = function(config, ui) {
  config.remote = config.remote || 'https://github.jspm.io';

  return (config.name != 'github' ? Promise.resolve(ui.confirm('Are you setting up a GitHub Enterprise registry?', true)) : Promise.resolve())
  .then(function(enterprise) {
    if (!enterprise)
      return;

    return Promise.resolve(ui.input('Enter the hostname of your GitHub Enterprise server', config.hostname))
    .then(function(hostname) {
      config.hostname = hostname;
    });
  })
  .then(function() {
    return Promise.resolve(ui.confirm('Would you like to set up your GitHub credentials?', true))
    .then(function(auth) {
      if (auth)
        return configureCredentials(config, ui)
        .then(function(auth) {
          config.auth = auth;
        });
      });
  })
  .then(function() {
    config.maxRepoSize = config.maxRepoSize || 0;
    return config;
  });
};

// regular expression to verify package names
GithubLocation.packageFormat = /^[^\/]+\/[^\/]+/;

GithubLocation.prototype = {

  // given a repo name, locate it and ensure it exists
  locate: function(repo) {
    var self = this;
    var remoteString = this.remoteString;

    if (repo.split('/').length !== 2)
      throw "GitHub packages must be of the form `owner/repo`.";

    // request the repo to check that it isn't a redirect
    return new Promise(function(resolve, reject) {
      request(extend({
        uri: remoteString + repo,
        headers: {
          'User-Agent': 'jspm'
        },
        followRedirect: false
      }, self.defaultRequestOptions
      ))
      .on('response', function(res) {
        // redirect
        if (res.statusCode == 301)
          resolve({ redirect: self.name + ':' + res.headers.location.split('/').splice(3).join('/') });

        if (res.statusCode == 401)
          reject('Invalid authentication details.\n' +
            'Run %jspm registry config ' + self.name + '% to reconfigure the credentials, or update them in your ~/.netrc file.');

        // it might be a private repo, so wait for the lookup to fail as well
        if (res.statusCode == 404 || res.statusCode == 200 || res.statusCode === 302)
          resolve();

        reject(new Error('Invalid status code ' + res.statusCode + '\n' + JSON.stringify(res.headers, null, 2)));
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

  // return values
  // { versions: { versionhash } }
  // { notfound: true }
  lookup: function(repo) {
    var execOpt = this.execOpt;
    var remoteString = this.remoteString;
    return new Promise(function(resolve, reject) {
      execGit('ls-remote ' + remoteString.replace(/(['"()])/g, '\\\$1') + repo + '.git refs/tags/* refs/heads/*', execOpt, function(err, stdout, stderr) {
        if (err) {
          if (err.toString().indexOf('not found') == -1) {
            // dont show plain text passwords in error
            var error = new Error(stderr.toString().replace(remoteString, ''));
            error.hideStack = true;
            error.retriable = true;
            reject(error);
          }
          else
            resolve({ notfound: true });
        }

        versions = {};
        var refs = stdout.split('\n');
        for (var i = 0; i < refs.length; i++) {
          if (!refs[i])
            continue;

          var hash = refs[i].substr(0, refs[i].indexOf('\t'));
          var refName = refs[i].substr(hash.length + 1);
          var version;
          var versionObj = { hash: hash, meta: {} };

          if (refName.substr(0, 11) == 'refs/heads/') {
            version = refName.substr(11);
            versionObj.stable = false;
          }

          else if (refName.substr(0, 10) == 'refs/tags/') {
            if (refName.substr(refName.length - 3, 3) == '^{}')
              version = refName.substr(10, refName.length - 13);
            else
              version = refName.substr(10);

            if (version.substr(0, 1) == 'v' && semver.valid(version.substr(1))) {
              version = version.substr(1);
              // note when we remove a "v" which versions we need to add it back to
              // to work out the tag version again
              versionObj.meta.vPrefix = true;
            }
          }

          versions[version] = versionObj;
        }

        resolve({ versions: versions });
      });
    });
  },

  // optional hook, allows for quicker dependency resolution
  // since download doesn't block dependencies
  getPackageConfig: function(repo, version, hash, meta) {
    if (meta.vPrefix)
      version = 'v' + version;

    return asp(request)(extend({
      uri: this.apiRemoteString + 'repos/' + repo + '/contents/package.json',
      headers: {
        'User-Agent': 'jspm',
        'Accept': 'application/vnd.github.v3.raw'
      },
      qs: {
        ref: version
      }
    }, this.defaultRequestOptions
    )).then(function(res) {
      var rateLimitResponse = checkRateLimit.call(this, res.headers);
      if (rateLimitResponse)
        return rateLimitResponse;

      if (res.statusCode == 404) {
        // it is quite valid for a repo not to have a package.json
        return {};
      }

      if (res.statusCode != 200)
        throw 'Unable to check repo package.json for release, status code ' + res.statusCode;

      var packageJSON;

      try {
        packageJSON = JSON.parse(res.body);
      }
      catch(e) {
        throw 'Error parsing package.json';
      }

      return packageJSON;
    });
  },

  processPackageConfig: function(pjson, packageName) {
    if (!pjson.jspm || !pjson.jspm.files)
      delete pjson.files;

    var self = this;

    if (pjson.dependencies && !pjson.registry && (!pjson.jspm || !pjson.jspm.dependencies)) {
      var hasDependencies = false;
      for (var p in pjson.dependencies)
        hasDependencies = true;

      if (packageName && hasDependencies) {
        var looksLikeNpm = pjson.name && pjson.version && (pjson.description || pjson.repository || pjson.author || pjson.license || pjson.scripts);
        var isSemver = semver.valid(packageName.split('@').pop());
        var noDepsMsg;

        // non-semver npm installs on GitHub can be permitted as npm branch-tracking installs
        if (looksLikeNpm) {
          if (!isSemver)
            noDepsMsg = 'To install this package as it would work on npm, install with a registry override via %jspm install ' + packageName + ' -o "{registry:\'npm\'}"%.'
          else
            noDepsMsg = 'If the dependencies aren\'t needed ignore this message. Alternatively set a `registry` or `dependencies` override or use the npm registry version at %jspm install npm:' + pjson.name + '@^' + pjson.version + '% instead.';
        }
        else {
          noDepsMsg = 'If this is your own package, add `"registry": "jspm"` to the package.json to ensure the dependencies are installed.'
        }

        if (noDepsMsg) {
          delete pjson.dependencies;
          this.ui.log('warn', '`' + packageName + '` dependency installs skipped as it\'s a GitHub package with no registry property set.\n' + noDepsMsg + '\n');
        }
      }
      else {
        delete pjson.dependencies;
      }
    }

    // on GitHub, single package names ('jquery') are from jspm registry
    // double package names ('components/jquery') are from github registry
    if (!pjson.registry) {
      for (var d in pjson.dependencies) {
        var depName = pjson.dependencies[d];
        var depVersion;

        if (depName.indexOf(':') != -1)
          continue;

        if (depName.indexOf('@') != -1) {
          depName = depName.substr(0, depName.indexOf('@'));
          depVersion = depName.substr(depName.indexOf('@') + 1);
        }
        else {
          depVersion = depName;
          depName = d;
        }

        if (depName.split('/').length == 1)
          pjson.dependencies[d] = 'jspm:' + depName + (depVersion && depVersion !== true ? '@' + depVersion : '');
      }
    }
    return pjson;
  },

  download: function(repo, version, hash, meta, outDir) {
    if (meta.vPrefix)
      version = 'v' + version;

    var execOpt = this.execOpt;
    var max_repo_size = this.max_repo_size;
    var remoteString = this.remoteString;

    var self = this;

    return this.checkReleases(repo, version)
    .then(function(release) {
      if (!release)
        return true;

      // Download from the release archive
      return new Promise(function(resolve, reject) {
        var inPipe;

        if (release.type == 'tar') {
          (inPipe = zlib.createGunzip())
          .pipe(tar.Extract({
            path: outDir, 
            strip: 0,
            filter: function() {
              return !this.type.match(/^.*Link$/);
            }
          }))
          .on('end', function() {
            resolve();
          })
          .on('error', reject);
        }
        else if (release.type == 'zip') {
          var tmpDir = path.resolve(execOpt.cwd, 'release-' + repo.replace('/', '#') + '-' + version);
          var tmpFile = tmpDir + '.' + release.type;

          var repoDir;

          inPipe = fs.createWriteStream(tmpFile)
          .on('finish', function() {
            return clearDir(tmpDir)
            .then(function() {
              return asp(fs.mkdir(tmpDir));
            })
            .then(function() {
              return new Promise(function(resolve, reject) {
                var files = [];
                yauzl.open(tmpFile, function(err, zipFile) {
                  if (err)
                    return reject(err);

                  zipFile.on('entry', function(entry) {
                    var fileName = tmpDir + '/' + entry.fileName;

                    if (fileName[fileName.length - 1] == '/')
                      return;

                    zipFile.openReadStream(entry, function(err, readStream) {
                      if (err)
                        return reject(err);
                      mkdirp(path.dirname(fileName), function(err) {
                        if (err)
                          return reject(err);
                        files.push(new Promise(function(_resolve, _reject) {
                            var p = fs.createWriteStream(fileName).on("close", function(err) {
                                if (err) _reject(err);
                                _resolve();
                            });
                            readStream.pipe(p);
                        }));
                      });
                    });
                  });
                  zipFile.on('close', function() {
                      Promise.all(files).then(function() {
                          resolve();
                      }).catch(function(e) {
                          reject(e);
                      });
                  });
                });


              })
            })
            .then(function() {
             return checkStripDir(tmpDir);
            })
            .then(function(_repoDir) {
              repoDir = _repoDir;
              return asp(fs.rmdir)(outDir);
            })
            .then(function() {
              return asp(fs.rename)(repoDir, outDir);
            })
            .then(function() {
              return asp(fs.unlink)(tmpFile);
            })
            .then(resolve, reject);
          })
          .on('error', reject);
        }
        else {
          throw 'GitHub release found, but no archive present.';
        }

        // now that the inPipe is ready, do the request
        request(extend({
          uri: release.url,
          headers: {
            'accept': 'application/octet-stream',
            'user-agent': 'jspm'
          },
          followRedirect: false,
          auth: self.auth && {
            user: self.auth.username,
            pass: self.auth.password
          }
        }, self.defaultRequestOptions
        )).on('response', function(archiveRes) {
          var rateLimitResponse = checkRateLimit.call(this, archiveRes.headers);
          if (rateLimitResponse)
            return rateLimitResponse.then(resolve, reject);

          if (archiveRes.statusCode != 302)
            return reject('Bad response code ' + archiveRes.statusCode + '\n' + JSON.stringify(archiveRes.headers));

          request(extend({
            uri: archiveRes.headers.location, headers: {
              'accept': 'application/octet-stream',
              'user-agent': 'jspm'
            }
          }, self.defaultRequestOptions
          ))
          .on('response', function(archiveRes) {

            if (max_repo_size && archiveRes.headers['content-length'] > max_repo_size)
              return reject('Response too large.');

            archiveRes.pause();

            archiveRes.pipe(inPipe);

            archiveRes.on('error', reject);

            archiveRes.resume();

          })
          .on('error', reject);
        })
        .on('error', reject);
      });
    })
    .then(function(git) {
      if (!git)
        return;

      // Download from the git archive
      return new Promise(function(resolve, reject) {
        request(extend({
          uri: remoteString + repo + '/archive/' + version + '.tar.gz',
          headers: { 'accept': 'application/octet-stream' }
        }, self.defaultRequestOptions
        ))
        .on('response', function(pkgRes) {
          if (pkgRes.statusCode != 200)
            return reject('Bad response code ' + pkgRes.statusCode);

          if (max_repo_size && pkgRes.headers['content-length'] > max_repo_size)
            return reject('Response too large.');

          pkgRes.pause();

          var gzip = zlib.createGunzip();

          pkgRes
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

          pkgRes.resume();

        })
        .on('error', reject);
      });
    });
  },

  checkReleases: function(repo, version) {
    // NB cache this on disk with etags
    var reqOptions = extend({
      uri: this.apiRemoteString + 'repos/' + repo + '/releases',
      headers: {
        'User-Agent': 'jspm',
        'Accept': 'application/vnd.github.v3+json'
      },
      followRedirect: false
    }, this.defaultRequestOptions);

    return asp(request)(reqOptions)
    .then(function(res) {
      var rateLimitResponse = checkRateLimit.call(this, res.headers);
      if (rateLimitResponse)
        return rateLimitResponse;
      return Promise.resolve()
      .then(function() {
        try {
          return JSON.parse(res.body);
        }
        catch(e) {
          throw 'Unable to parse GitHub API response';
        }
      })
      .then(function(releases) {
        // run through releases list to see if we have this version tag
        for (var i = 0; i < releases.length; i++) {
          var tagName = (releases[i].tag_name || '').trim();

          if (tagName == version) {
            var firstAsset = releases[i].assets.filter(function(asset) {
              if (asset.name.substr(asset.name.length - 7, 7) == '.tar.gz' || asset.name.substr(asset.name.length - 4, 4) == '.tgz')
                asset.fileType = 'tar';
              else if (asset.name.substr(asset.name.length - 4, 4) == '.zip')
                asset.fileType = 'zip';
              return !!asset.fileType;
            })
            .sort(function(asset) {
              // src.zip comes after file.zip
              return asset.name.indexOf('src') == -1 ? -1 : 1;
            })[0];
            
            if (!firstAsset)
              return false;

            return { url: firstAsset.url, type: firstAsset.fileType };
          }
        }
        return false;
      });
    });
  },

  // check if the main entry point exists. If not, try the bower.json main.
  build: function(pjson, dir) {
    var main = pjson.main || '';
    var libDir = pjson.directories && (pjson.directories.dist || pjson.directories.lib) || '.';

    if (main instanceof Array)
      main = main[0];

    if (typeof main != 'string')
      return;

    // convert to windows-style paths if necessary
    main = main.replace(/\//g, path.sep);
    libDir = libDir.replace(/\//g, path.sep);

    if (main.indexOf('!') != -1)
      return;

    function checkMain(main, libDir) {
      if (!main)
        return Promise.resolve(false);

      if (main.substr(main.length - 3, 3) == '.js')
        main = main.substr(0, main.length - 3);

      return new Promise(function(resolve, reject) {
        fs.exists(path.resolve(dir, libDir || '.', main) + '.js', function(exists) {
          resolve(exists);
        });
      });
    }

    return checkMain(main, libDir)
    .then(function(hasMain) {
      if (hasMain)
        return;

      return asp(fs.readFile)(path.resolve(dir, 'bower.json'))
      .then(function(bowerJson) {
        try {
          bowerJson = JSON.parse(bowerJson);
        }
        catch(e) {
          return;
        }

        main = bowerJson.main || '';
        if (main instanceof Array)
          main = main[0];

        return checkMain(main);
      }, function() {})
      .then(function(hasBowerMain) {
        if (!hasBowerMain)
          return;

        pjson.main = main;
      });
    });
  }

};

module.exports = GithubLocation;
