Meteor.publish( "users", function(){
	return Meteor.users.find();
});
Meteor.publish( "roles", function() {
	return Meteor.roles.find({});
});

/* CollectionFS entities */
Meteor.publish('mime_upload', function() {
	return MimeUpload.find();
});