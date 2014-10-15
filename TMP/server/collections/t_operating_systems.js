/*
 * Add query methods like this:
 *  TOperatingSystems.findPublic = function () {
 *    return TOperatingSystems.find({is_public: true});
 *  }
 */

TOperatingSystemsCollection.allow({
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

TOperatingSystemsCollection.deny({
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
