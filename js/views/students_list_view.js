define(['backbone', 'underscore', 'text!../../templates/studentsListViewTemplate.html',
	'views/add_edit_students_view', 'models/student', 'views/students_grid_view',
   'views/students_chart_view', 'collections/students_details_collection'],
 function(Backbone, _, studentsListViewTemplate, AddEditStudentsView, StudentModel,
 	StudentsGridView, StudentsChartView, StudentsDetailsCollection) {
	var StudentsListView = Backbone.View.extend({
		el: '#container',
		template: _.template(studentsListViewTemplate, {}),
		events: {
			'click #addEditButton' : 'addEditButtonClicked',
      'click #totalChartsBtn': 'totalChartsClicked'
		},

		initialize: function(options) {
			console.log('StudentsListView initialize');
      this.studentsDetailsCollection = new StudentsDetailsCollection();
			this.listenTo(this.collection, 'add', this.renderStudentsGrid);
			this.render();
		},
		
		render: function () {
        	this.$el.html(this.template);
        	return this;
  	 },

  	 addEditButtonClicked: function() {
  	    	var studentModel = new StudentModel();
  	    	studentModel.set('name', this.$el.find('input[name="name"]').val());
  	    	studentModel.set('rollNumber', this.$el.find('input[name="rollNumber"]').val());
  	    	studentModel.set('address', this.$el.find('textarea[name="address"]').val());
          if(this.collection.length === 0) {
            var studentsGridView =  new StudentsGridView({
            collection : this.collection
          });
          studentsGridView.render();
         }
  	    	this.collection.add(studentModel);
  	    },

  /*	 renderStudentsGrid: function() {
      if(this.collection.length === 0) {
            var studentsGridView =  new StudentsGridView({
            collection : this.collection
          });
          studentsGridView.render();
      }
    },*/

      totalChartsClicked: function() {
        debugger
        if(this.studentsDetailsCollection.length) {
          console.log('no fetch required')
          this.createChartData();
        } else {
          this.fetchStudentDetails()
          console.log('fetch required')
        }
        
      },

      createChartData: function() {
        debugger
         var arr=[], that = this;
            _.each(that.collection.models, function(model){
              var obj = {};
              _.each(that.studentsDetailsCollection.models, function(res){
                 if (Number(model.get('rollNumber')) === Number(res.get('rollNumber'))) {
                    obj.name = res.get('rollNumber');
                    obj.data = res.get('marks');
                    arr.push(obj);
                 };
              });
            });
            var studentsChartView =  new StudentsChartView({
            data : arr
          });
          studentsChartView.render();
      },

      //this.studentsDetailsCollection[10]
      //this.collection (rollnumber) - add

      fetchStudentDetails: function() {
        var that = this;
        that.studentsDetailsCollection.fetch({
          success: function(model, response) {
            that.studentsDetailsCollection.reset(response);
            that.createChartData();
          },
          error: function() {
            console.log('Error in fetch');
          }

        });
      }
	});
	return StudentsListView;
});

