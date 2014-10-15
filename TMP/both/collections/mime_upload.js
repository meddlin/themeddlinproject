MimeUpload = new FS.Collection('mime_upload', {
	stores: [masterStore],
    filter: {
        maxSize: 1073741824, //in bytes
        onInvalid: function(message) {
            if(Meteor.isClient){
                alert(message);
            }else{
                console.warn(message);
            }
        }
    }
});

/*
	It's going to accept:
	audio/*
	chemical/*
	image/*
	inode/*
	message/*
	model/*
	multipart/*
	text/*
	video/*
	xconference/*
	xepoc/*
	xworld/*
*/

/*
Complete List: http://www.iana.org/assignments/media-types/media-types.xhtml
found @: http://stackoverflow.com/questions/1735659/list-of-all-mimetypes-on-the-planet-mapped-to-file-extensions
also check: /etc/mime.types

ERROR -> "" [unknown, error]
.mht
.apple
.cpp
*/

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
