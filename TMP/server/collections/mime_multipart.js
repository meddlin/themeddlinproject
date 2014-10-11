/*
 * Add query methods like this:
 *  MimeMultipart.findPublic = function () {
 *    return MimeMultipart.find({is_public: true});
 *  }
 */

MimeMultipart.allow({
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

MimeMultipart.deny({
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
