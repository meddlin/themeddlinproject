TPictures = new FS.Collection('t_pictures', {
	stores: [
		new FS.Store.GridFS("photorecon"),
		new FS.Store.GridFS("thumbs_photorecon")
	],
	filter: {
		allow: {
			contentTypes: ['image/*']
		}
	}
});

/*
 * Add query methods like this:
 *  TPictures.findPublic = function () {
 *    return TPictures.find({is_public: true});
 *  }
 */
