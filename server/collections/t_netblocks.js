/*
 * Add query methods like this:
 *  TNetblocks.findPublic = function () {
 *    return TNetblocks.find({is_public: true});
 *  }
 */

TNetblocks.allow({
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

TNetblocks.deny({
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
