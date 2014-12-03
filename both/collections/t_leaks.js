TLeaks = new Meteor.Collection('t_leaks');
TLeaks.attachSchema(TLeakSchema);

/*
 * Add query methods like this:
 *  TLeaks.findPublic = function () {
 *    return TLeaks.find({is_public: true});
 *  }
 */
