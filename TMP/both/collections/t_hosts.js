THost = function (document){
	_.extend(this, document);
};

THost.prototype = {
	constructor: THost
};

THostsCollection = new Mongo.Collection('t_hosts', {
	transform: function (document){
		return new THost(document);
	}
});

/*
 * Add query methods like this:
 *  THosts.findPublic = function () {
 *    return THosts.find({is_public: true});
 *  }
 */
