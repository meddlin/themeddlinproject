MimeXworld = new FS.Collection('mime_xworld', {
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
 *  MimeXworld.findPublic = function () {
 *    return MimeXworld.find({is_public: true});
 *  }
 */
