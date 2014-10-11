/*
 * Add query methods like this:
 *  MimeModel.findPublic = function () {
 *    return MimeModel.find({is_public: true});
 *  }
 */

MimeModel.allow({
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

MimeModel.deny({
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
