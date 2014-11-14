Router.configure({
  layoutTemplate: "masterLayout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  routeControllerNameConverter: "camelCase"
});

Router.onBeforeAction("loading", function(){
  NProgress.start();
  /* waiting for data processing goes here, see: LOADING ANIMATION: go here for a tutorial | https://www.eventedmind.com/classes/how-to/meteor-how-to-use-an-ios7-style-loading-indicator-with-iron-router */
  NProgress.done();
});
Router.map(function() {
  this.route("home", {
    path: "/",
    layoutTemplate: "homeLayout"
  });
  this.route("dashboard", {
    path: "/dashboard",
    waitOn: function() {
      return [Meteor.subscribe('posts'), Meteor.subscribe('favorites'), Meteor.subscribe('comments')];
    },
    data: function() {
      return {
        Posts: Posts.find({}, {
          sort: {
            createdAt: -1
          }
        }).fetch()
      };
    }
  });
  this.route("profile", {
    path: "/profile",
    waitOn: function() {
      return Meteor.subscribe('profilePictures');
    }
  });
  this.route("account", {
    path: "/account"
  });
  this.route('hosts', {
    path: '/hosts'
  });
  this.route('osinfo', {
    path: '/osinfo'
  });
  this.route("pushpins", {
    path: "/pushpins"
  });
  this.route("softwareinfo", {
    path: "/softwareinfo"
  });
  this.route("targetusers", {
    path: "/targetusers"
  });
});

Router.waitOn(function() {
  Meteor.subscribe('user');
  Meteor.subscribe('userPicture');
});