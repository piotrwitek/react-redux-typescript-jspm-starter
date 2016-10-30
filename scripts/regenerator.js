require('shelljs/global');

cd('temp');
cp('../dist/app.js', '.');
exec('regenerator -r app.js > app.regenerator.js');
mv('app.regenerator.js', '../dist/app.js');

