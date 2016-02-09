define(['jquery', 'backbone', 'underscore', 'highcharts'],
 function($, Backbone, _, highcharts) {
	var StudentChartView = Backbone.View.extend({ 
//The HTML Element 
	el: '#totalCharts',
	initialize: function (options) {
        debugger
       this.data = options.data;
    },
	//Render View 
	 render: function () {
        debugger
            this.$el.highcharts({
                title: {
                    text: 'Student Results Chart',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: Subjects',
                    x: -20
                },
                xAxis: {
                    categories: ['Hindi', 'English', 'Maths']
                },
                yAxis: {
                    title: {
                        text: 'Marks'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: 'marks'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: this.data
            });
        } 
	});
	return StudentChartView;
});
