Meteor.publish( "users", function(){
	return Meteor.users.find();
});
Meteor.publish( "roles", function() {
	return Meteor.roles.find({});
});

Meteor.publish('chat', function() {
	//return Chat.find({}, {sort: {time: -1}});
	//return Chat.find({}, {limit: 5}, {sort: {$natural: 1}});
	//return Chat.find();
	return Chat.find({}, {fields: {message:{$slice: -10}}});
});

Meteor.publish('t_hosts', function() {
	return THostsCollection.find();
});
Meteor.publish('user_data_log', function() {
	return UserDataLogsCollection.find();
});

/* CollectionFS entities */
Meteor.publish('mime_upload', function() {
	return MimeUpload.find();
});