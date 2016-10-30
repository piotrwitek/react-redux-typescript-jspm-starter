require('shelljs/global');
const repository = require('../package.json').repository;

const command = process.argv[2];

switch (command) {
  case 'deploy':
    rm('-rf', 'dist/.git');
    mkdir('-p', 'dist/.git')
    exec(
      `git clone ${repository} --branch gh-pages gh-pages-clone`
    );
    cp('-Rf', 'gh-pages-clone/.git', 'dist');
    rm('-rf', 'gh-pages-clone');
    break;

  default:
    console.log('\nUsage: node init.js <arg>');
    console.log('\nwhere <arg> is one of:');
    console.log('    deploy\n');
    break;
}

