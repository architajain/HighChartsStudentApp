define(['backbone', 'models/student'], function(Backbone, StudentModel) {
	var StudentsDetailsCollection = Backbone.Collection.extend({
		model : StudentModel,
		url: 'data/students_details.json'
	});
	return StudentsDetailsCollection
})