/*
 * Add query methods like this:
 *  RecentActivity.findPublic = function () {
 *    return RecentActivity.find({is_public: true});
 *  }
 */

RecentActivity.allow({
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

RecentActivity.deny({
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
