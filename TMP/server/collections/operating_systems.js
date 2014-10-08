/*
 * Add query methods like this:
 *  OperatingSystems.findPublic = function () {
 *    return OperatingSystems.find({is_public: true});
 *  }
 */

OperatingSystems.allow({
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

OperatingSystems.deny({
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
