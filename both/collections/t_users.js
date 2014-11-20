TUsers = new Meteor.Collection('t_users');
TUsers.attachSchema(TUserSchema);
/*
 * Add query methods like this:
 *  TUsers.findPublic = function () {
 *    return TUsers.find({is_public: true});
 *  }
 */