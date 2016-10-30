require('shelljs/global');

const command = process.argv[2];

switch (command) {
  case 'dev':
    exec(
      'jspm bundle configs/vendor.config.dev.js temp/vendor.dev.js -d'
    );
    break;
  case 'app':
    cp('assets/*', 'dist');
    cp('index.prod.html', 'dist/index.html');
    exec(
      'jspm build src/app - configs/vendor.config.prod.js dist/app.js --skip-source-maps --minify'
    );
    break;
  case 'vendor':
    exec(
      'jspm bundle configs/vendor.config.prod.js dist/vendor.prod.js -ms'
    );
    cp(
      '-R', ['jspm.config.js', 'jspm_packages/system.js'], 'dist'
    );
    break;
  case 'debug':
    exec(
      'jspm build src/app - configs/vendor.config.prod.js dist/app.js'
    );
    break;

  default:
    console.log('\nUsage: node build.js <arg>');
    console.log('\nwhere <arg> is one of:');
    console.log('    dev, app, vendor, debug\n');
    break;
}

