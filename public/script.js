google.charts.load('45', { packages: ['corechart', 'table', 'geochart'] });

google.charts.setOnLoadCallback(drawColumnChart);
google.charts.setOnLoadCallback(drawColumnChart1);



function drawColumnChart() {
	$.ajax({
		url:'/a',
		dataType: "json",
		success:function(jsonData){
				var data = google.visualization.arrayToDataTable(jsonData);	
				
			var options = {
				title: 'Company Performance',
				hAxis: { title: 'name', titleTextStyle: { color: 'red' } }
			};

			var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
			chart.draw(data, options);
				}
	});
    
}

function drawColumnChart1() {
	$.ajax({
		url:'/b',
		dataType: "json",
		success:function(jsonData){
				var data = google.visualization.arrayToDataTable(jsonData);	
				
			var options = {
				title: 'Company Performance',
				hAxis: { title: 'name', titleTextStyle: { color: 'red' } }
			};

			var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
			chart.draw(data, options);
				}
	});
    
}

$(window).resize(function () {
   
    drawColumnChart();
	drawColumnChart1();
});
