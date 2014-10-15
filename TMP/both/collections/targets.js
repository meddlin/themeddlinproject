Target = function (document){
	_.extend(this, document);
};

Target.prototype = {
	constructor: Target
};

TargetsCollection = new Mongo.Collection('targets', {
	transform: function (document){
		return new Target(document);
	}
});

/*
 * Add query methods like this:
 *  Targets.findPublic = function () {
 *    return Targets.find({is_public: true});
 *  }
 */
