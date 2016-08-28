// development init import
SystemJS.import('systemjs-hot-reloader').then(function(HotReloader) {
  // if you're running server on custom port please remember to update below
  new HotReloader.default('http://localhost:8888');
});
// load main module of your app
SystemJS.trace = true;
SystemJS.import('src/app');
