/*
 * Add query methods like this:
 *  MimeInode.findPublic = function () {
 *    return MimeInode.find({is_public: true});
 *  }
 */

MimeInode.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  },
  download: function() {
    return true;
  }
});

MimeInode.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  },
  download: function() {
    return false;
  }
});
