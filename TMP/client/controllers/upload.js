UploadController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('mime_upload');
  	//sauce: https://meteorhacks.com/subscription-manager-for-iron-router.html
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
