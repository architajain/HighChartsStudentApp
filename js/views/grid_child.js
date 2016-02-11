define(['jquery', 'backbone', 'underscore', 'text!../../templates/studentsGridDataTemplate.html'],
 function($, Backbone, _, studentsGridDataTemplate) {
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
        var studentCollection = this.studentCollection;
        if(this.studentCollection.length === 0) {
            this.studentCollection.trigger('fetch:students');
        }
        var arr = _.where(studentCollection, {'rollNumber' : this.model.get('rollNumber')});
        arr.name = arr.rollNumber;
        arr.data  = arr.marks;
        var studentsChartView =  new StudentsChartView({
            data : arr
          });
         studentsChartView.render();
    },
    
    modelChanged: function(){
    	this.remove();
    }
});
	 return StudentsGridChildView;
});