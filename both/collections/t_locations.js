TLocations = new Meteor.Collection('t_locations');
TLocations.attachSchema(TLocationSchema);
/*
 * Add query methods like this:
 *  TLocations.findPublic = function () {
 *    return TLocations.find({is_public: true});
 *  }
 */
