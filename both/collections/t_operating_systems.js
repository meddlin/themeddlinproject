TOperatingSystems = new Meteor.Collection('t_operating_systems');

/*
 * Add query methods like this:
 *  TOperatingSystems.findPublic = function () {
 *    return TOperatingSystems.find({is_public: true});
 *  }
 */
TOperatingSystems.attachSchema(TOperatingSystemSchema);