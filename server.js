'use strict';
const jspmHmrServer = require('jspm-hmr');

const options = {
  fallback: '/index.html',
  verbose: false,
};

// SERVER
const server = jspmHmrServer.createServer(options);

server
  .listen(3000, (err) => {
    console.log('[debug] %j', server.address());
    console.log('\n>>> hit CTRL-C twice to exit <<<\n');
  })
  .on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
      console.log(`\n[WARNING] Selected address is in use: ${URL}`);
      console.log(`[WARNING] Please try again using different port or address...\n`);

      process.exit();
    }
  });
