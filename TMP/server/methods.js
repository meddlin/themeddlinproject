Meteor.methods({
	removeAllFiles: function() {
		return MimeApplication.remove({});
	}
});