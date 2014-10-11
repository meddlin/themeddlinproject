MimeAudio = new FS.Collection('mime_audio', {
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
 *  MimeAudio.findPublic = function () {
 *    return MimeAudio.find({is_public: true});
 *  }
 */
