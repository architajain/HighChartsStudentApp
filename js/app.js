define(['backbone', 'routes'], function(Backbone, AppRoutes){
 	var initialize = function() {
 		console.log('Application initialized');
 		var routes = new AppRoutes();
 		Backbone.history.start();

 	} 
 	return  {
 		initialize : initialize
 	}
})