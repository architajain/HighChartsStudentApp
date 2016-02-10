define(['jquery', 'backbone', 'underscore', 'views/grid_child'],
 function($, Backbone, _, StudentsGridChildView) {
	var StudentGridView = Backbone.View.extend({ 
//The HTML Element 
	el: '#studentTable', 
	//Render View 
	render: function () { 
	    var viewHtml = '<table border="1">'; 
	    viewHtml += "<tr><th>Name</th><th>Roll Number</th></tr>"; 
	    //Iterate through the collection 
	    _.each(this.collection.models, function (model) { 
	    //Set the View 
	    debugger
	    var studRecHtml = new StudentsGridChildView({model:model}).render().el;
	    viewHtml += studRecHtml; 
	}, this);

	    viewHtml +='</table>' 
	    $(this.el).html(viewHtml);
	}
});
	return StudentGridView;
});

