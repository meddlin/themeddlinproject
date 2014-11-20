
/*****************************************************************************/
/* Hosts: Event Handlers and Helpersss .js*/
/*****************************************************************************/

Template.hosts.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.hosts.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Hosts: Lifecycle Hooks */
/*****************************************************************************/
Template.hosts.created = function () {
  Meteor.subscribe('t_hosts');
};

Template.hosts.rendered = function () {
};

Template.hosts.destroyed = function () {
};


