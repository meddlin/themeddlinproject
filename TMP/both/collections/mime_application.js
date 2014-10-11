MimeApplication = new FS.Collection('mime_application', {
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
 *  MimeApplication.findPublic = function () {
 *    return MimeApplication.find({is_public: true});
 *  }
 */
