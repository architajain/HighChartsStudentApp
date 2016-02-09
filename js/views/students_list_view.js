define(['backbone', 'underscore', 'text!../../templates/studentsListViewTemplate.html',
	'views/add_edit_students_view', 'models/student', 'views/students_grid_view', 'views/students_chart_view'],
 function(Backbone, _, studentsListViewTemplate, AddEditStudentsView, StudentModel,
 	StudentsGridView, StudentsChartView) {
	var StudentsListView = Backbone.View.extend({
		el: '#container',
		template: _.template(studentsListViewTemplate, {}),
		events: {
			'click #addEditButton' : 'addEditButtonClicked',
      'click #totalCharts': 'totalChartsClicked'
		},

		initialize: function(options) {
			console.log('StudentsListView initialize');
			this.listenTo(this.collection, 'add', this.renderStudentsGrid)
			this.render();
		},
		
		render: function (){
        	this.$el.html(this.template);
        	return this;
  	    },

  	 addEditButtonClicked: function() {
  	    	var studentModel = new StudentModel();
  	    	studentModel.set('name', this.$el.find('input[name="name"]').val());
  	    	studentModel.set('rollNumber', this.$el.find('input[name="rollNumber"]').val());
  	    	studentModel.set('address', this.$el.find('textarea[name="address"]').val());
  	    	this.collection.add(studentModel);
  	    },

  	 renderStudentsGrid: function() {
  	    	var studentsGridView =  new StudentsGridView({
  	    		collection : this.collection
  	    	});
  	    	studentsGridView.render();
  	    },

      totalChartsClicked: function() {
        this.collection.fetch({
          success: function(model, response) {
            _.each(response, function(res){
              res.name =res.rollNumber,
              res.data =res.marks
            });
            var studentsChartView =  new StudentsChartView({
            data : response
          });
          studentsChartView.render();
            
          },
          error: function() {
            console.log('Error in fetch');
          }

        });
      }
	});
	return StudentsListView;
});

