
/*****************************************************************************/
/* Companies: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Companies.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Companies.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

Template.companiesData.entries = function(){
  return TCompanies.find();
};

/*****************************************************************************/
/* Companies: Lifecycle Hooks */
/*****************************************************************************/
Template.Companies.created = function () {
};

Template.Companies.rendered = function () {
};

Template.Companies.destroyed = function () {
};


