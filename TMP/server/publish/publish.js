Meteor.publish( "users", function(){
	return Meteor.users.find();
});
Meteor.publish( "roles", function() {
	return Meteor.roles.find({});
});

/* CollectionFS entities */
Meteor.publish('mime_application', function() {
	return MimeApplication.find();
	/*return 
	[
		MimeApplication.find(),
		MimeAudio.find(),
		MimeChemical.find(),
		MimeImage.find(),
		MimeInode.find(),
		MimeMessage.find(),
		MimeModel.find(),
		MimeMultipart.find(),
		MimeText.find(),
		MimeVideo.find(),
		MimeXconference.find(),
		MimeXepoc.find(),
		MimeXworld.find()
	];*/
});

/*Meteor.publish('mime_application', function() {
    return MimeApplication.find();
});
Meteor.publish('mime_audio', function() {
	return MimeAudio.find();
});
Meteor.publish('mime_chemical', function() {
	return MimeChemical.find();
});
Meteor.publish('mime_image', function(){
	return MimeImage.find();
});
Meteor.publish('mime_inode', function() {
	return MimeInode.find();
});
Meteor.publish('mime_message', function() {
	return MimeMessage.find();
});
Meteor.publish('mime_model', function() {
	return MimeModel.find();
});
Meteor.publish('mime_multipart', function() {
	return MimeMultipart.find();
});
Meteor.publish('mime_text', function() {
	return MimeText.find();
});
Meteor.publish('mime_video', function() {
	return MimeVideo.find();
});
Meteor.publish('mime_xconference', function() {
	return MimeXconference.find();
});
Meteor.publish('mime_xepoc', function() {
	return MimeXepoc.find();
});
Meteor.publish('mime_xworld', function() {
	return MimeXworld.find();
});*/