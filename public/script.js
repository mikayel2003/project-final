google.charts.load('45', { packages: ['corechart', 'table', 'geochart'] });
google.charts.setOnLoadCallback(drawSeriesChart);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawPieChart1);
google.charts.setOnLoadCallback(drawColumnChart);
google.charts.setOnLoadCallback(drawColumnChart1);

function drawSeriesChart() {
			
			$.ajax({
				url:"/a",
				dataType:"json",
				success:function(jsonData){
					$.ajax({
						url:"/b",
						dataType:"json",
						success:function(js)
						{
							var d=[["name","byte","followers"]];
							for(var i=0;i<jsonData.length;i++)
							{
								if(i!=0)
								{
								for(var j=0;j<js.length;j++)
								{
									if(j!=0)
									{
									if(jsonData[i][0]==js[j][0])
									{
										var e=[];
										e.push(jsonData[i][0]);
										e.push(jsonData[i][1]);
										e.push(js[j][1]);
										d.push(e);										
										break;
									}
									}
								}
								}
							}
							console.log(d[0]);
							var data = google.visualization.arrayToDataTable(d);
							var options = {
								
								hAxis: {title: 'byte'},
								vAxis: {title: 'followers'},
								bubble: {textStyle: {fontSize: 11}}
							  };
						
							  var chart = new google.visualization.BubbleChart(document.getElementById('chart_div10'));
							  chart.draw(data, options);
						}
					});
				}
			});
		  
	
		  
		}
function drawPieChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
	data.addColumn('number', 'Percentage');
	$.ajax({
		url:'/a',
		dataType: "json",
		success:function(jsonData1){
			jsonData1[0]=["Ruby",0];
			data.addRows(jsonData1);
		
			var options = {
				legend: 'left',
				title: 'byte',
				is3D: true,
				width: '100%',
				height: '100%'
			};
			
			var chart = new google.visualization.PieChart(document.getElementById('chart_div0'));
			chart.draw(data, options);
				}
	});
  
}
function drawPieChart1()
{
	var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
	data.addColumn('number', 'Percentage');
	$.ajax({
		url:'/b',
		dataType: "json",
		success:function(jsonData1){
			jsonData1[0]=["Ruby",0];
			data.addRows(jsonData1);
		
			var options = {
				legend: 'left',
				title: 'followers',
				is3D: true,
				width: '100%',
				height: '100%'
			};
			
			var chart = new google.visualization.PieChart(document.getElementById('chart_div3'));
			chart.draw(data, options);
				}
	});
}
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
	drawSeriesChart();
	drawPieChart();
	drawPieChart1();
	drawColumnChart()
	drawColumnChart1()
});
