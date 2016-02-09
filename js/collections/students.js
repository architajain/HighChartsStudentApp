define(['backbone', 'models/student'], function(Backbone, StudentModel) {
	var StudentCollection = Backbone.Collection.extend({
		model : StudentModel,
		url: 'data/students_details.json'
	});
	return StudentCollection
})