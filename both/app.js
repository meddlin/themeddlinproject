App = {
  alertSuccess: function(message) {
  	Session.set('alertError', '');
    return Session.set('alertSuccess', message);
  },

  alertError: function(message) {
    Session.set('alertError', message);
    return Session.set('alertSuccess', '');
  }
}