TNetblocks = new Meteor.Collection('t_netblocks');
TNetblocks.attachSchema(TNetblockSchema);
/*
 * Add query methods like this:
 *  TNetblocks.findPublic = function () {
 *    return TNetblocks.find({is_public: true});
 *  }
 */
