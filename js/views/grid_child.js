define(['jquery', 'backbone', 'underscore', 'text!../../templates/studentsGridDataTemplate.html'],
 function($, Backbone, _, studentsGridDataTemplate) {
	var StudentsGridChildView = Backbone.View.extend({
    tagName : 'tr',
    template: _.template(studentsGridDataTemplate,{}),
    events: {
    	'click #deleteStudentBtn': 'deleteStudentBtnClicked'
    },
    initialize: function(){
    	this.model.bind('remove', this.modelChanged, this)
    },

    render : function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    deleteStudentBtnClicked: function() {
    	this.model.destroy();
    },
    
    modelChanged: function(){
    	this.remove();
    }
});
	 return StudentsGridChildView;
});