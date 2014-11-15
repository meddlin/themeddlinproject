MimeUpload = new FS.Collection('mime_upload', {
	stores: [new FS.Store.GridFS("upload_master")],
	filter: {
		maxSize: 1073741824, //in bytes
		onInvalid: function(message){
			if (Meteor.isClient){
				App.alertError(message)
			}else{
				console.warn(message);
			}
		}
	}
});

/*
 * Add query methods like this:
 *  MimeUpload.findPublic = function () {
 *    return MimeUpload.find({is_public: true});
 *  }
 */
