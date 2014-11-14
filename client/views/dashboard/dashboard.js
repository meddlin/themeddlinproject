AutoForm.hooks({
  add: {
    onError: function(operation, error) {
      return App.alertsError(error);
    }
  }
});