MimeXepoc = new FS.Collection('mime_xepoc', {
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
 *  MimeXepoc.findPublic = function () {
 *    return MimeXepoc.find({is_public: true});
 *  }
 */
