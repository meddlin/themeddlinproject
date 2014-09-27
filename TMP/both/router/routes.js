/*****************************************************************************/
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
Router.onBeforeAction('loading');
//Router.onAfterAction();
//Router.onRun();
//Router.onData();
//Router.onStop();

Router.map(function () {
      this.route('home', {path: '/'});
      this.route('profile', {path: '/profile'});
      this.route('upload', {path: '/upload'});
      this.route('admin', {path: '/admin'});
});
