require.config({
	paths: {
		 jquery: 'libs/jquery',
		 underscore: 'libs/underscore',
		 backbone: 'libs/backbone',
		 highcharts: 'libs/highcharts',
		 handlebars: 'libs/handlebars/handlebars.runtime-v1.3.0',
		 text: 'libs/text'
	},

	shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'highcharts': {
        	deps: ['jquery'],
            exports: 'Highcharts'
        },
        'handlebars': {
       	    exports: 'Handlebars'
        }
	}

});
	require(['app'],
		function(App) {
			console.log('Application started');
			App.initialize();
	});
