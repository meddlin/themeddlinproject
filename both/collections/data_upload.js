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

/*
for more queries: http://stackoverflow.com/questions/3305561/how-to-query-mongodb-with-like
*/
MimeUpload.findAllMimeApplication = function () {
	return MimeUpload.find({type: 'application/*'});
}

MimeUpload.findAllMimeAudio = function (){
	return MimeUpload.find({type: 'audio/*'});
}

MimeUpload.findAllMimeChemical = function (){
	return MimeUpload.find({type: 'chemical/*'});
}

MimeUpload.findAllMimeImage = function (){
	return MimeUpload.find({type: 'image/*'});
}

MimeUpload.findAllMimeInode = function (){
	return MimeUpload.find({type: 'inode/*'});
}

MimeUpload.findAllMimeMessage = function (){
	return MimeUpload.find({type: 'message/*'});
}

MimeUpload.findAllMimeModel = function (){
	return MimeUpload.find({type: 'model/*'});
}

MimeUpload.findAllMimeMultipart = function (){
	return MimeUpload.find({type: 'multipart/*'});
}

MimeUpload.findAllMimeText = function (){
	return MimeUpload.find({type: 'text/*'});
}

MimeUpload.findAllMimeVideo = function (){
	return MimeUpload.find({type: 'video/*'});
}

MimeUpload.findAllXconference = function (){
	return MimeUpload.find({type: 'xconference/*'});
}

MimeUpload.findAllXepoc = function (){
	return MimeUpload.find({type: 'xepoc/*'});
}

MimeUpload.findAllXworld = function (){
	return MimeUpload.find({type: 'xworld/*'});
}