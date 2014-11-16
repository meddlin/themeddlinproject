TUsers = new Meteor.Collection('t_users');

/*
 * Add query methods like this:
 *  TUsers.findPublic = function () {
 *    return TUsers.find({is_public: true});
 *  }
 */
TUsers.attachSchema(TUserSchema);