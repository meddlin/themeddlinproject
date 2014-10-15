Software = function (document){
	_.extend(this, document);
}

Software.prototype = {
	constructor: Software
};

SoftwareCollection = new Mongo.Collection('software', {
	transform: function (document){
		return new Software(document);
	}
});

/*
 * Add query methods like this:
 *  Software.findPublic = function () {
 *    return Software.find({is_public: true});
 *  }
 */
