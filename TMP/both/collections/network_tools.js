NetworkTool = function(document){
	_.extend(this, document);
};

NetworkTool.prototype = {
	constructor: NetworkTool
};

NetworkToolCollection = new Mongo.Collection('recon_tools', {
	transform: function (document){
		return new NetworkTool(document);
	}
});

/*
 * Add query methods like this:
 *  ReconTools.findPublic = function () {
 *    return ReconTools.find({is_public: true});
 *  }
 */
