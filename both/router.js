Router.configure({
  layoutTemplate: "masterLayout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  routeControllerNameConverter: "camelCase",
  progress: true,
  progressSpinner: false
});

Router.onBeforeAction("loading");
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
  this.route('/dataentry/:_field', function() {
    if(this.params._field === "host"){
      Meteor.subscribe('t_hosts');
      this.render('newHost');
    }else if(this.params._field === "os"){
      Meteor.subscribe('t_operating_systems');
      this.render('newOs');
    }else if(this.params._field === "software"){
      Meteor.subscribe('t_softwares');
      this.render('newSoftware');
    }else if(this.params._field === "user"){
      Meteor.subscribe('t_users');
      this.render('newUser');
    }else{
      this.render(notFoundTemplate);
    }
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