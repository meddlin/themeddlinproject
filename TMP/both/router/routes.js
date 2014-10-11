/****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

/* HOOKS */
Router.onBeforeAction(
/*
	LOADING ANIMATION: go here for a tutorial | https://www.eventedmind.com/classes/how-to/meteor-how-to-use-an-ios7-style-loading-indicator-with-iron-router
*/
	function(){
		NProgress.start();
		//waiting for data processing goes here, see above URL for instruction
		NProgress.done();
	}
);
//Router.onAfterAction();
//Router.onRun();
//Router.onData();
//Router.onStop();

/*
	Multiple Subscriptions on One Route
	--sauce: stackoverflow.com/questions/22940628/multiple-subscriptions-in-iron-router
	--return an array of subscriptions
	waitOn: function() {
		return [Meteor.subscribe('coll-1', this.params._id),
			Meteor.subscribe('coll-2', this.params._id)];
	}
	
*/

Router.map(function () {
	this.route('home', {
		path: '/'
	});
		//the waitOn: function() goes here and Meteor.subscribe goes inside of it
			//sauce: https://meteorhacks.com/subscription-manager-for-iron-router.html
	this.route('profile', {
		path: '/profile'
	});
	this.route('upload', {
		path: '/upload',
		waitOn: function (){
			return Meteor.subscribe('mime_application');
		}
	});
	this.route('admin', {
		path: '/admin'
	});
	/*,
					Meteor.subscribe('mime_audio'),
					Meteor.subscribe('mime_chemical'),
					Meteor.subscribe('mime_image'),
					Meteor.subscribe('mime_inode'),
					Meteor.subscribe('mime_message'),
					Meteor.subscribe('mime_model'),
					Meteor.subscribe('mime_multipart'),
					Meteor.subscribe('mime_text'),
					Meteor.subscribe('mime_video'),
					Meteor.subscribe('mime_xconference'),
					Meteor.subscribe('mime_xepoc'),
					Meteor.subscribe('mime_xworld')*/
});


/*
Complete List: http://www.iana.org/assignments/media-types/media-types.xhtml
found @: http://stackoverflow.com/questions/1735659/list-of-all-mimetypes-on-the-planet-mapped-to-file-extensions
also check: /etc/mime.types

ERROR -> "" [unknown, error]
.mht
.apple
*/