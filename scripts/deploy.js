require('shelljs/global');
const repository = require('../package.json').repository;

const command = process.argv[2];

switch (command) {
  case 'init':
    rm('-rf', 'dist/.git');
    mkdir('-p', 'dist/.git')
    exec(
      `git clone ${repository} --branch gh-pages gh-pages-clone`
    );
    cp('-Rf', 'gh-pages-clone/.git', 'dist');
    rm('-rf', 'gh-pages-clone');
    break;

  default:
    console.log('\nUsage: node deploy.js <arg>');
    console.log('\nwhere <arg> is one of:');
    console.log('    init\n');
    break;
}

