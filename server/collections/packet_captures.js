/*
 * Add query methods like this:
 *  PacketCaptures.findPublic = function () {
 *    return PacketCaptures.find({is_public: true});
 *  }
 */

PacketCaptures.allow({
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

PacketCaptures.deny({
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
