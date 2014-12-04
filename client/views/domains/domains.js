
/*****************************************************************************/
/* domains: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.domains.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.domains.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

Template.viewDomain.domain = function() {
  return TDomains.find();
}

/*****************************************************************************/
/* domains: Lifecycle Hooks */
/*****************************************************************************/
Template.domains.created = function () {
};

Template.domains.rendered = function () {
};

Template.domains.destroyed = function () {
};


