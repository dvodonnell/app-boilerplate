require.config({
    baseUrl: '/js',
    paths: {
        "html" : '../html',
        "backboneModal": "../library/backbone-modal/backbone.modal",
        "backbone": "../library/backbone/backbone",
        "underscore": "../library/underscore/underscore",
        "jquery": "../library/jquery/jquery",
        "hbs" : '../library/requirejs-plugins/hbs/hbs',
        "vegas" : '../library/vegas/jquery.vegas.min',
        "masonry" : '../library/masonry/masonry.min',
        "reveal" : '../library/reveal/jquery.reveal',
        "moment" : '../library/moment/moment.min'
    },
    shim: {
        'backboneModal' : {
            deps : ['backbone']
        },
        'backbone': {
            deps: ['underscore','jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});
