define(['backbone', 'views/students_list_view', 'collections/students', 'models/student'],
 function(Backbone, StudentsListView, StudentsCollection, StudentsModel) {
	var appRoutes = Backbone.Router.extend({
		routes: {
			'*path' : 'defaultRoutes'
		},
		initialize : function() {
			console.log('routes initialize')
		},

		defaultRoutes: function() {
			console.log('defaultRoutes .....')
			var studentsListView = new StudentsListView({
				collection : new StudentsCollection()
			});
		}
	})

	return appRoutes;
});