HostsController = RouteController.extend({
  waitOn: function () {
  	//subscribe to THosts here
	//sauce: https://meteorhacks.com/subscription-manager-for-iron-router.html
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
