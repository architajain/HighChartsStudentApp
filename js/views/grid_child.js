define(['jquery', 'backbone', 'underscore', 'text!../../templates/studentsGridDataTemplate.html'],
 function($, Backbone, _, studentsGridDataTemplate) {
	var StudentsGridChildView = Backbone.View.extend({
    tagName : 'tr',
    template: _.template(studentsGridDataTemplate,{}),
    render : function() {
    	debugger
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
	 return StudentsGridChildView;
});