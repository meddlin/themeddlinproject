
/*****************************************************************************/
/* Dashboard: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Dashboard.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Dashboard.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*Template.myTemplate.topGenresChart = function() {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: this.username + "'s top genres"
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
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
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'genre',
            data: [
                ['Adventure',   45.0],
                ['Action',       26.8],
                ['Ecchi',   12.8],
                ['Comedy',    8.5],
                ['Yuri',     6.2]
            ]
        }]
    };
};*/

/*****************************************************************************/
/* Dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.Dashboard.created = function () {

};

Template.Dashboard.rendered = function () {
 /* var seriesData = [];
  var hosts = THostsCollection.find();

  hosts.forEach( function(host) {
    var dataPoint = [host.ip, host.hostname];
    seriesData.push(dataPoint);
  });

  chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      renderTo: "highchart"
    },
    series: [{
      type: 'pie',
      name: 'Hosts',
      data: seriesData
    }]
  }

  var chart = new Highcharts.Chart(chartOptions);*/
  $(function (){
    $('#hosts-chart-container').highcharts({
      chart:{
        type: 'bar'
      },
      title:{
        text:'I got some Hosts for You'
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
  })
};

Template.Dashboard.destroyed = function () {
};


