TSoftware = function (document){
	_.extend(this, document);
};

TSoftware.prototype = {
	constructor: TSoftware
};

TSoftwareCollection = new Mongo.Collection('t_software', {
	transform: function (document){
		return new TSoftware(document);
	}
});

/*
 * Add query methods like this:
 *  TSoftware.findPublic = function () {
 *    return TSoftware.find({is_public: true});
 *  }
 */
