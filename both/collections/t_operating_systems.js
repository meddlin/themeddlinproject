TOperatingSystems = new Meteor.Collection('t_operating_systems');
TOperatingSystems.attachSchema(TOperatingSystemSchema);
/*
 * Add query methods like this:
 *  TOperatingSystems.findPublic = function () {
 *    return TOperatingSystems.find({is_public: true});
 *  }
 */