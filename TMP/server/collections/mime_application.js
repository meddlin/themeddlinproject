/*
 * Add query methods like this:
 *  MimeApplication.findPublic = function () {
 *    return MimeApplication.find({is_public: true});
 *  }
 */

MimeApplication.allow({
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

MimeApplication.deny({
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
