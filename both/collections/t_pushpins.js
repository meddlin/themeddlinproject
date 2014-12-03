TPushpins = new Meteor.Collection('t_pushpins');
TPushpins.attachSchema(TPushpinSchema);
/*
 * Add query methods like this:
 *  TPushpins.findPublic = function () {
 *    return TPushpins.find({is_public: true});
 *  }
 */
