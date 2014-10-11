/*
 * Add query methods like this:
 *  MimeAudio.findPublic = function () {
 *    return MimeAudio.find({is_public: true});
 *  }
 */

MimeAudio.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  },
  download: function(){
    return true;
  }
});

MimeAudio.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  },
  download: function(){
    return false;
  }
});
