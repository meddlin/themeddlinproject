ProfilePictures.allow({
  insert: function(userId, doc) {
  	return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return true;
  },
  download: function(userId) {
    return true;
  }
});

Posts.allow({
  insert: function(userId, doc) {
    return userId === doc.owner;
  },
  update: function(userId, doc, fields, modifier) {
    return userId === doc.owner;
  },
  remove: function(userId, doc) {
    return userId === doc.owner;
  }
});