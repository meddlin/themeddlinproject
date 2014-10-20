/*****************************************************************************/
/* Highcharts Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/highcharts/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
/*  PieChart: function() {
  	return Highcarts.charts[0];
  },
  UpdateSeriesData: function() {
	  var seriesData = [];
	  var hosts = THostsCollection.find();

	  hosts.forEach( function(host) {
	    var dataPoint = [host.ip, host.hostname];
	    seriesData.push(dataPoint);
	  });

	  Meteor.call("PieChart").series[0].setData(seriesData, true);
  }*/
});
