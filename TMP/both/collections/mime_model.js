MimeModel = new FS.Collection('mime_model', {
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
 *  MimeModel.findPublic = function () {
 *    return MimeModel.find({is_public: true});
 *  }
 */
