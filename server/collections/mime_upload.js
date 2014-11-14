/*
 * Add query methods like this:
 *  MimeUpload.findPublic = function () {
 *    return MimeUpload.find({is_public: true});
 *  }
 */

MimeUpload.allow({
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

MimeUpload.deny({
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
