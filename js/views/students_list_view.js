define(['jquery','backbone', 'underscore', 'text!../../templates/studentsListViewTemplate.html',
	'views/add_edit_students_view', 'models/student', 'views/students_grid_view',
   'views/students_chart_view', 'collections/students_details_collection'],
 function($, Backbone, _, studentsListViewTemplate, AddEditStudentsView, StudentModel,
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
     // this.bind('fetch:students', this.fetchStudentDetails);
      this.listenTo(this.studentsDetailsCollection,'fetch:students', this.fetchStudentDetails);
      this.listenTo(this.studentsDetailsCollection,'trigger:singlechart', this.createSingleChart);
			this.render();
		},
		
		render: function () {
        	this.$el.html(this.template);
        	return this;
  	 },

  	 addEditButtonClicked: function() {
      debugger
  	    	var studentModel = new StudentModel();
  	    	studentModel.set('name', this.$el.find('input[name="name"]').val());
  	    	studentModel.set('rollNumber', this.$el.find('input[name="rollNumber"]').val());
  	    	studentModel.set('address', this.$el.find('textarea[name="address"]').val());
          if(!this.isGridRenderd) {
            var studentsGridView =  new StudentsGridView({
            collection : this.collection,
            studentCollection : this.studentsDetailsCollection
          });
          studentsGridView.render();
          this.isGridRenderd = true;
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
        if(this.studentsDetailsCollection.size() > 0) {
          console.log('no fetch required')
          //this.createChartData();
        } else {
          var aaa = this.fetchStudentDetails()
          console.log('fetch required')
        }
        var that = this;
         $.when(this.isfetch).done(function () {
          debugger

         that.createChartData();
        });
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

      createSingleChart: function(model) {
       var rn = Number(model.get('rollNumber'));
       //var arr = _.where(this.studentsDetailsCollection, {'rollNumber' : 123});
       var arr = this.studentsDetailsCollection.where({'rollNumber' : rn});
       var obj = {}, array = [];
        obj.name = arr[0].get('rollNumber');
        obj.data  = arr[0].get('marks');
        array.push(obj);
        var studentsChartView =  new StudentsChartView({
            data : array
          });
         studentsChartView.render();
      },

      //this.studentsDetailsCollection[10]
      //this.collection (rollnumber) - add

      fetchStudentDetails: function(opt1, opt2) {
        debugger
        var that = this;
        this.isfetch = that.studentsDetailsCollection.fetch({
          success: function(model, response) {
            that.studentsDetailsCollection.reset(response);
            if (opt1) {
              that.createSingleChart(opt2);
            };
          },
          error: function() {
            console.log('Error in fetch');
          }
        });
      }
	});
	return StudentsListView;
});

