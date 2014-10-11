MimeText = new FS.Collection('mime_text', {
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
 *  MimeText.findPublic = function () {
 *    return MimeText.find({is_public: true});
 *  }
 */
