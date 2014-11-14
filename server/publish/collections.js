Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('chat', function() {
	//return Chat.find({}, {sort: {time: -1}});
	//return Chat.find({}, {limit: 5}, {sort: {$natural: 1}});
	//return Chat.find();
	return Chat.find({}, {fields: {message:{$slice: -10}}});
});

Meteor.publish('t_hosts', function() {
	return THosts.find();
});
Meteor.publish('user_data_logs', function() {
	return UserDataLogs.find();
});

/* CollectionFS entities */
Meteor.publish('mime_upload', function() {
	return MimeUpload.find();
});