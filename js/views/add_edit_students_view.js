define(['jquery', 'backbone', 'underscore', 'text!../../templates/addEditStudentTemplate.html',
	'models/student'],
 function($, Backbone, _, addEditStudentTemplate, StudentModel) {
	var AddEditStudentsView = Backbone.View.extend({
		el: '#addEditStudentView',
		tagName: 'div',
		template: _.template(addEditStudentTemplate, {}),
		events: {
			'click #addEditButton' : 'addEditButtonClicked'
		},

		initialize: function() {
			console.log('AddEditStudentTemplate initialize');
			//this.render();
		},
		
		render: function (){
        	this.$el.html(this.template);
        	return this;
  	    },

  	    addEditButtonClicked: function() {
  	    	var studentModel = new StudentModel();
  	    	studentModel.set('name', this.$el.find('input[name="name"]').val());
  	    	studentModel.set('rollNumber', this.$el.find('input[name="rollNumber"]').val());
  	    	studentModel.set('address', this.$el.find('input[name="address"]').val());
  	    	this.collection.add(this.model);
  	    }
	});
	return AddEditStudentsView;
});

