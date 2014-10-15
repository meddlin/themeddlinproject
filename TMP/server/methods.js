Meteor.methods({
	removeAllFiles: function() {
		return MimeUpload.remove({});
	}
});