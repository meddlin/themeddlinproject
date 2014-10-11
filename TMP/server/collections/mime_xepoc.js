/*
 * Add query methods like this:
 *  MimeXepoc.findPublic = function () {
 *    return MimeXepoc.find({is_public: true});
 *  }
 */

MimeXepoc.allow({
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

MimeXepoc.deny({
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
