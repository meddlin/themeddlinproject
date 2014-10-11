/*
 * Add query methods like this:
 *  MimeXworld.findPublic = function () {
 *    return MimeXworld.find({is_public: true});
 *  }
 */

MimeXworld.allow({
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

MimeXworld.deny({
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
