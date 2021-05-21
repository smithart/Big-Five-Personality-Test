	aResult = 20;
	cResult = 20;
	oResult = 20;
	nResult = 20;
	eResult = 20;

	Highcharts.chart( 'container', {
  chart: {
    polar: true,
    type: 'line'
  },
  accessibility: {
    description: 'FRAME Results'
  },
  title: {
    text: 'FRAME Results',
    x: -80
  },
  pane: {
    size: '80%'
  },
  xAxis: {
    categories: ['Flexible', 'Reliable', 'Adventurous', 'Mature', 'Extroverted', 'Administration'],
    tickmarkPlacement: 'on',
    lineWidth: 0
  },
  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0
  },
  tooltip: {
    shared: true,
    pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
  },
/*  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical'
  }, */
  series: [
	/*		{
    name: 'FRAME Desired',
    data: [43000, 19000, 60000, 35000, 17000, 10000],
    pointPlacement: 'on'
  }, */
  {
    name: 'FRAME Actual',
    data: [aResult, cResult, oResult, nResult, eResult],
    pointPlacement: 'on'
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          align: 'center',
          verticalAlign: 'bottom',
          layout: 'horizontal'
        },
        pane: {
          size: '70%'
        }
      }
    }]
  }
});

