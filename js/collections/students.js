define(['backbone', 'models/student'], function(Backbone, StudentModel) {
	var StudentCollection = Backbone.Collection.extend({
		model : StudentModel
	});
	return StudentCollection
})