THosts = new Meteor.Collection('t_hosts');
THosts.attachSchema(THostSchema);

/*
 * Add query methods like this:
 *  THosts.findPublic = function () {
 *    return THosts.find({is_public: true});
 *  }
 */