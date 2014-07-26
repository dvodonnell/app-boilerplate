require.config({
    baseUrl: window.app.assetURL + 'js',
    paths: {
        "html" : '../html',
        "backbone": "../vendor/backbone/backbone",
        "underscore": "../vendor/underscore/underscore",
        "jquery": "../vendor/jquery/jquery",
        "hbs" : '../vendor/requirejs-plugins/hbs/hbs'
    },
    shim: {
        'backbone': {
            deps: ['underscore','jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});
