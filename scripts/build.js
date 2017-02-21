require('shelljs/global');

const package = require('../package.json');
const dependencies = Object.keys(package.jspm.dependencies).join(' + ');
const devDependencies = Object.keys(package.jspm.devDependencies).join(' + ');

const command = process.argv[2];

switch (command) {
  case 'dev':
    exec(
      `jspm bundle ${dependencies} + ${devDependencies} temp/vendor.dev.js -d`
    );
    break;
  case 'vendor':
    exec(
      `jspm bundle ${dependencies} dist/vendor.prod.js -ms`
    );
    cp(
      '-R', ['jspm.config.js', 'jspm_packages/system.js'], 'dist'
    );
    break;
  case 'app':
    cp('assets/*', 'dist');
    exec(
      `jspm build src/app - ${dependencies} dist/app.js --skip-source-maps --minify`
    );
    break;
  case 'debug':
    exec(
      `jspm build src/app - ${dependencies} dist/app.js`
    );
    break;

  default:
    console.log('\nUsage: node build.js <arg>');
    console.log('\nwhere <arg> is one of:');
    console.log('    dev, app, vendor, debug\n');
    break;
}

