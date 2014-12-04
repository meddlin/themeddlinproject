
/*****************************************************************************/
/* targetusers: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.targetusers.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.targetusers.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

Template.usersData.entries = function(){
  return TUsers.find();
};

/*****************************************************************************/
/* targetusers: Lifecycle Hooks */
/*****************************************************************************/
Template.targetusers.created = function () {
};

Template.targetusers.rendered = function () {
};

Template.targetusers.destroyed = function () {
};


