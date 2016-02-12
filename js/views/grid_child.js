define(['jquery', 'backbone', 'underscore', 'text!../../templates/studentsGridDataTemplate.html',
    'views/students_chart_view'],
 function($, Backbone, _, studentsGridDataTemplate, StudentsChartView) {
	var StudentsGridChildView = Backbone.View.extend({
    tagName : 'tr',
    template: _.template(studentsGridDataTemplate,{}),
    events: {
    	'click #deleteStudentBtn': 'deleteStudentBtnClicked',
        'click #chartStudentBtn': 'renderChart'
    },
    initialize: function(options){
        this.studentCollection = options.studentCollection;
    	this.model.bind('remove', this.modelChanged, this);
    },

    render : function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    deleteStudentBtnClicked: function() {
    	this.model.destroy();
    },

    renderChart: function() {
        debugger
        if(this.studentCollection.length === 0) {
            this.studentCollection.trigger('fetch:students', true, this.model);
        } else {
            this.studentCollection.trigger('fetch:students', this.model);
        }
    },
    
    modelChanged: function(){
    	this.remove();
    }
});
	 return StudentsGridChildView;
});