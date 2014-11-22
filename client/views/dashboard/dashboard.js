AutoForm.hooks({
  add: {
    onError: function(operation, error) {
      return App.alertsError(error);
    }
  }
});

/*****************************************************************************/
/* dashboard: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.dashboard.events({

});

Template.dashboard.helpers({

});

/*****************************************************************************/
/* dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.dashboard.created = function () {

};

Template.dashboard.rendered = function () {

//OS pie chart
$(function () {
    $('#os-pie-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'OS Breakdown'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'OS share',
            data: [
                ['Windows 7',   45.0],
                ['OSX 10.10',       26.8],
                {
                    name: 'Linux 3.6',
                    y: 12.8,
                    sliced: true,
                    selected: true
                }
            ]
        }]
    });
});

//Software pie chart
$(function () {
    $('#software-pie-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'Software Breakdown'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'OS share',
            data: [
                ['Adobe Reader',   34.5],
                ['Google Ultron',       26.8],
                {
                    name: 'Vista Virus',
                    y: 12.8,
                    sliced: true,
                    selected: true
                }
            ]
        }]
    });
});


//bar chart
  $(function (){
    $('#hosts-chart-container').highcharts({
      chart:{
        type: 'bar'
      },
      title:{
        text:'Subnets with Most Hosts'
      },
      subtitle:{
        text:'you like?'
      },
      xAxis:{
        categories: ['147.174.0.0', '147.174.1.0', '147.174.2.0', '147.174.3.0'],
        title:{
          text: null
        }
      },
      yAxis:{
        min: 0,
        title: {
          text: 'Number of Hosts in IP-space',
          align: 'high'
        },
        labels:{
          overflow: 'justify'
        }
      },
      tooltip:{
        valueSuffix:' oodles'
      },
      plotOptions:{
        bar:{
          dataLabels:{
            enabled: true
          }
        }
      },
      legend:{
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
      },
      credits: {
        enabled: false
      },
      series:[{
        name: 'Scan1',
        data: [107, 32, 235, 255]
      },{
        name: 'Scan2',
        data: [135, 235, 123, 313]
      }, {
        name: 'Scan3',
        data: [123, 89, 12, 144]
      }, {
        name: 'Scan4',
        data: [12, 58, 190, 184]
      }]
    })
  });
};

Template.dashboard.destroyed = function () {
};