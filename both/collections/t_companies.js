TCompanies = new Meteor.Collection('t_companies');
TCompanies.attachSchema(TCompanySchema);

/*
 * Add query methods like this:
 *  TCompanies.findPublic = function () {
 *    return TCompanies.find({is_public: true});
 *  }
 */
