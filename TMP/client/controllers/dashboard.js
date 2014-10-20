DashboardController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('t_hosts');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
