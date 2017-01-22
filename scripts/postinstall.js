console.log('Rebuilding development vendor bundle, please wait...');

const exec = require('child_process').execSync;
const output = exec('npm run build:dev');

console.log();
console.log(output);


