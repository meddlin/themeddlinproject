/*
 * Add query methods like this:
 *  UserDataLogs.findPublic = function () {
 *    return UserDataLogs.find({is_public: true});
 *  }
 */

UserDataLogs.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

UserDataLogs.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
