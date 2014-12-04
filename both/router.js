Router.configure({
  layoutTemplate: "masterLayout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  routeControllerNameConverter: "camelCase",
  progress: true,
  progressSpinner: false
});

Router.onBeforeAction(function(){
  if(!this.ready()){
    this.render('loading');
  }else{
    this.next();
  }
});

Router.map(function() {
  this.route("home", {
    path: "/",
    layoutTemplate: "homeLayout"
  });
  this.route("dashboard", {
    path: "/dashboard",
    waitOn: function() {  //populates wait list with these subscriptions
      return [
        Meteor.subscribe('t_softwares'),
        Meteor.subscribe('t_operating_systems'),
        Meteor.subscribe('t_hosts')
      ];
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
    path: '/hosts',
    waitOn: function(){
      return Meteor.subscribe('t_hosts');
    }
  });
  this.route('vulns', {
    path: '/vulns',
    waitOn: function(){
      return Meteor.subscribe('t_vulns');
    }
  });
  this.route('netblocks', {
    path: '/netblocks',
    waitOn: function(){
      return Meteor.subscribe('t_netblocks');
    }
  });
  this.route('locations', {
    path: '/locations',
    waitOn: function(){
      console.log("locations waiton");
      return Meteor.subscribe('t_locations');
    }
  });
  this.route('leaks', {
    path: '/leaks',
    waitOn: function(){
      return Meteor.subscribe('t_leaks');
    }
  });
  this.route('domains', {
    path: '/domains',
    waitOn: function(){
      return Meteor.subscribe('t_domains');
    }
  });
  this.route('companies', {
    path: '/companies',
    waitOn: function(){
      return Meteor.subscribe('t_companies');
    }
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
    }else if(this.params._field === "company"){
      Meteor.subscribe('t_companies');
      this.render('newCompany');
    }else if(this.params._field === "domain"){
      Meteor.subscribe('t_domains');
      this.render('newDomain');
    }else if(this.params._field === "leak"){
      Meteor.subscribe('t_leaks');
      this.render('newLeak');
    }else if(this.params._field === "location"){
      Meteor.subscribe('t_locations');
      this.render('newLocation');
    }else if(this.params._field === "netblock"){
      Meteor.subscribe('t_netblocks');
      this.render('newNetblock');
    }else if(this.params._field === "pushpin"){
      Meteor.subscribe('t_pushpins');
      this.render('newPushpin');
    }else if(this.params._field === "vuln"){
      Meteor.subscribe('t_vulns');
      this.render('newVuln');
    }else{
      this.render(notFoundTemplate);
    }
  });
  this.route('osinfo', {
    path: '/osinfo',
    waitOn: function(){
      Meteor.subscribe('voltage_os');
    },
    action: function(){
      Voltage.render(this);
    }
  });
  this.route("softwareinfo", {
    path: "/softwareinfo",
    waitOn: function(){
      Meteor.subscribe('voltage_software');
    }
  });
  this.route("nettoolinfo", {
    path: "/nettooolinfo",
    waitOn: function(){
      Meteor.subscribe('voltage_nettool');
    }
  })
  this.route("pushpins", {
    path: "/pushpins"
  });
  this.route("targetusers", {
    path: "/targetusers",
    waiton: function(){
      Meteor.subscribe('t_users');
    }
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