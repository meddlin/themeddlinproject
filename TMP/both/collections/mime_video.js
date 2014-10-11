MimeVideo = new FS.Collection('mime_video', {
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
 *  MimeVideo.findPublic = function () {
 *    return MimeVideo.find({is_public: true});
 *  }
 */
