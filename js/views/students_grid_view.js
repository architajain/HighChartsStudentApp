define(['jquery', 'backbone', 'underscore'],
 function($, Backbone, _) {
	var StudentGridView = Backbone.View.extend({ 
//The HTML Element 
	el: '#studentTable', 
	//Render View 
	render: function () { 
	    var viewHtml = '<table border="1">'; 
	    viewHtml += "<tr><td>Name</td><td>Roll Number</td><td>Address</td></tr>"; 
	    //Iterate through the collection 
	    _.each(this.collection.models, function (model) { 
	        var studRecHtml = '<tr><td>' + model.get('name') + '</td><td>' +
	         model.get('rollNumber') + '</td><td>' +
	         model.get('address') + '</td></tr>'; 
	        viewHtml += studRecHtml; 
	    }); 
	    viewHtml +='</table>' 
	    //Set the View 
	    $(this.el).html(viewHtml); 
	} 
	});
	return StudentGridView;
});

