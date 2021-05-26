	const chart = Highcharts.chart( 'container', {
  chart: {
    polar: true
  ,  type: 'area'
  },
  accessibility: {
    description: 'FRAME Results'
  },
  title: {
    text: 'FRAME Results'
  /*,  x: -80 */
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
    gridLineInterpolation: 'polygon', // circle or polygon
    lineWidth: 0,
    min: 0,
    max: 40,
    tickInterval: 10,
    minorTicks: true,
    minorTickInterval: 5
  },
  tooltip: {
    shared: true,
/*    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>' */
    pointFormat: '<span style="color:{series.color}"><b>{point.y:,.0f}</b><br/>'
},
  series: [
  {
    name: 'FRAME Actual',
    data: [aResult, cResult, oResult, nResult, eResult],
    pointPlacement: 'on'
/*,    type: "area" */
,   dataLabels: {
      enabled: true,
      outside: true
    },
    showInLegend: false
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

