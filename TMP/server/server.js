Meteor.startup(function () {
// code to run on server at startup
});

Validation = {
  clear: function() {
    return Session.get("error", undefined);
  },
  set_error: function(message) {
    return Session.set("error", message);
  },
  valid_name: function(name) {
    this.clear();
    if (name.length == 0){
      this.set_error("Name can't be blank");
      return false;
    } else if (this.player_exists(name)){
      this.set_error("Player already exists");
      return false;
    } else {
      return true;
    }
  },
  player_exists: function(name) {
    return Players.findOne({name: name});
  }
};