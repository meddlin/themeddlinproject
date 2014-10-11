MimeInode = new FS.Collection('mime_inode', {
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
 *  MimeInode.findPublic = function () {
 *    return MimeInode.find({is_public: true});
 *  }
 */
