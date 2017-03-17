require('shelljs/global');

const packageJson = require('../package.json');
const prodDependencies = Object.keys(packageJson.jspm.dependencies);
const devDependencies = Object.keys(packageJson.jspm.devDependencies);
const allDependencies = prodDependencies.concat(devDependencies);

const command = process.argv[2];

switch (command) {
  case 'dev':
    exec(
      `jspm bundle ${allDependencies.join(' + ')} temp/vendor.dev.js -d`
    );
    break;

  case 'vendor':
    exec(
      `jspm bundle ${prodDependencies.join(' + ')} dist/vendor.prod.js -ms`
    );
    cp(
      '-R', ['jspm.config.js', 'jspm_packages/system.js'], 'dist'
    );
    break;

  case 'app':
    exec(
      `jspm build src/app - ${prodDependencies.join(' - ')} dist/app.js --skip-source-maps --minify`
    );
    cp('assets/*', 'dist');
    break;

  case 'debug':
    exec(
      `jspm build src/app - ${prodDependencies.join(' - ')} dist/app.js`
    );
    break;

  default:
    console.log('\nUsage: node build.js <arg>');
    console.log('\nwhere <arg> is one of:');
    console.log('    dev, app, vendor, debug\n');
    break;
}

