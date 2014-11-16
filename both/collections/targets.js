Targets = new Meteor.Collection('targets');

/*
 * Add query methods like this:
 *  Targets.findPublic = function () {
 *    return Targets.find({is_public: true});
 *  }
 */

/* all data for a target should be accessible from here */

Targets.attachSchema(TargetSchema);