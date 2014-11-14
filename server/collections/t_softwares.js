/*
 * Add query methods like this:
 *  TSoftwares.findPublic = function () {
 *    return TSoftwares.find({is_public: true});
 *  }
 */

TSoftwares.allow({
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

TSoftwares.deny({
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
