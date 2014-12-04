
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

Template.hostsData.entries = function(){
  return THosts.find();
};

/*****************************************************************************/
/* Hosts: Lifecycle Hooks */
/*****************************************************************************/
Template.hosts.created = function () {
};

Template.hosts.rendered = function () {
};

Template.hosts.destroyed = function () {
};


