TVulns = new Meteor.Collection('t_vulns');
TVulns.attachSchema(TVulnSchema);
/*
 * Add query methods like this:
 *  TVulns.findPublic = function () {
 *    return TVulns.find({is_public: true});
 *  }
 */
