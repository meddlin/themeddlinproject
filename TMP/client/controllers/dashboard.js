DashboardController = RouteController.extend({
  waitOn: function () {
  	/*return Meteor.subscribe('t_hosts', function() {
  		THostsCollection.find({}).observe({
  			changed: function(id, fields){
  				Meteor.call("UpdateSeriesData");
  			},
  			removed: function(id){
  				Meteor.call("UpdateSeriesData");
  			},
  			added: function(id){
  				Meteor.call("UpdateSeriesData");
  			}
  		});
  	});*/
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
