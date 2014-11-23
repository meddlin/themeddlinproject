/*
 * Add query methods like this:
 *  VoltageSoftware.findPublic = function () {
 *    return VoltageSoftware.find({is_public: true});
 *  }
 */

VoltageSoftware.allow({
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

VoltageSoftware.deny({
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
