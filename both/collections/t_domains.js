TDomains = new Meteor.Collection('t_domains');
TDomains.attachSchema(TDomainSchema);

/*
 * Add query methods like this:
 *  TDomains.findPublic = function () {
 *    return TDomains.find({is_public: true});
 *  }
 */
