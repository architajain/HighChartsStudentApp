define(['jquery', 'backbone', 'underscore', 'views/grid_child', 'text!../../templates/addEditStudentTemplate.html'],
 function($, Backbone, _, StudentsGridChildView, addEditStudentTemplate) {
	var StudentGridView = Backbone.View.extend({ 
//The HTML Element 
	el: '#studentTable',
	template: _.template(addEditStudentTemplate, {}),

	initialize: function() {
		this.listenTo(this.collection, 'add', this.renderChildView);
	},

	renderChildView: function(model) {
	    //Set the View */
	    var studRecHtml = new StudentsGridChildView({model:model}).render().el;
	    this.$el.find('tbody').append(studRecHtml);

	},

	//Render View 
	render: function () {  
	    $(this.el).html(this.template);
	   /* _.each(this.collection.models, function (model) { 
	    //Set the View 
	    var studRecHtml = new StudentsGridChildView({model:model}).render().el;
	    this.$el.find('tbody').append(studRecHtml);
	}, this);*/
	}
});
	return StudentGridView;
});

