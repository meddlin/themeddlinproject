Router.configure({
  layoutTemplate: "masterLayout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  routeControllerNameConverter: "camelCase",
  progress: true,
  progressSpinner: false
});

Router.onBeforeAction("loading", function(){
  this.next();
});
Router.map(function() {
  this.route("home", {
    path: "/",
    layoutTemplate: "homeLayout"
  });
  this.route("dashboard", {
    path: "/dashboard",
    waitOn: function() {
      return [
        Meteor.subscribe('t_hosts'), Meteor.subscribe('t_operating_systems'),Meteor.subscribe('t_softwares')];
    },
    data: function() {
      return {
        THosts: THosts.find({}, { sort: {createdAt: -1} }).fetch(),
        TOperatingSystems: TOperatingSystems.find(),
        TSoftwares: TSoftwares.find()
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
  this.route("upload", {
    path: "/upload",
    waitOn: function() {
      return Meteor.subscribe('mime_upload');
    }
  });
});

Router.waitOn(function() {
  Meteor.subscribe('user');
  Meteor.subscribe('userPicture');
});