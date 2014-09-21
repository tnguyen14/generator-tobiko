require.config({
  baseUrl: '/',
  deps: ['js/app'],

  paths: {
    jquery: 'bower_components/jquery/dist/jquery.min'
  },

  // load non-amd dependencies
  shim: {
    jquery: {
      exports: 'jQuery'
    }
  }
});
