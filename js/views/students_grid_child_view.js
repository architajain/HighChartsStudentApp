define(['jquery', 'backbone', 'underscore', 'text!../../templates/studentsGridDataTemplate.html'],
 function($, Backbone, _, studentsGridDataTemplate) {
	var StudentsGridChildView = Backbone.View.extend({
    tagName : 'tr',
    template: _.template(studentsGridDataTemplate,{}),
    render : function() {
        this.$el.html(this.template);
        return this;
    }
});
	 return StudentsGridChildView;
});