MimeMultipart = new FS.Collection('mime_multipart', {
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
 * Add query methods like this:
 *  MimeMultipart.findPublic = function () {
 *    return MimeMultipart.find({is_public: true});
 *  }
 */
