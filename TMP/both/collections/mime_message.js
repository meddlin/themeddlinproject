MimeMessage = new FS.Collection('mime_message', {
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
 *  MimeMessage.findPublic = function () {
 *    return MimeMessage.find({is_public: true});
 *  }
 */
