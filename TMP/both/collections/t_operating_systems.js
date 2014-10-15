TOperatingSystem = function (document){
	_.extend(this, document);
}

TOperatingSystem.prototype = {
	constructor: TOperatingSystem
}

TOperatingSystemsCollection = new Mongo.Collection('t_operating_systems', {
	transform: function (document){
		return new TOperatingSystem(document);
	}
});

/*
 * Add query methods like this:
 *  TOperatingSystems.findPublic = function () {
 *    return TOperatingSystems.find({is_public: true});
 *  }
 */
