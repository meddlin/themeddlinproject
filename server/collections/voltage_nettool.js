/*
 * Add query methods like this:
 *  VoltageNettool.findPublic = function () {
 *    return VoltageNettool.find({is_public: true});
 *  }
 */

VoltageNettool.allow({
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

VoltageNettool.deny({
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
