/*
	For explanation on the custom EJSON type: https://eventedmind.com/feed/meteor-create-a-custom-ejson-type
	For transform functions: https://eventedmind.com/feed/meteor-transforming-collection-documents
*/

OperatingSystem = function(document) {
	_.extend(this, document);
};

OperatingSystem.prototype = {
	constructor: OperatingSystem
	//helper functions go here
};

OperatingSystemsCollection = new Mongo.Collection('operating_systems', {
	transform: function (document){
		return new OperatingSystem(document);
	}
});

/*
 * Add query methods like this:
 *  OperatingSystems.findPublic = function () {
 *    return OperatingSystems.find({is_public: true});
 *  }
 */
