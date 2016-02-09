define(['backbone'], function(Backbone) {
	var StudentModel = Backbone.Model.extend({
		defaults: {
			'name': '',
			'address': '',
			'rollNumber': ''
		}
	});
	return StudentModel;
})