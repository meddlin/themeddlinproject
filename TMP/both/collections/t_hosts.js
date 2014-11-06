/*THost = function (document){
	_.extend(this, document);
};

THost.prototype = {
	constructor: THost
};*/

/*THost.find = function() {
	return THostsCollection.find();
};*/

THostsCollection = new Mongo.Collection('t_hosts'/*, {
	transform: function (document){
		return new THost(document);
	}
}*/);

/*
 * Add query methods like this:
 *  THosts.findPublic = function () {
 *    return THosts.find({is_public: true});
 *  }
 */

 THost =
 {
 	ip: "",
	hostname: "",
	portNumber: "",
	portService: "",
	portPortStatus: "",
	portOs: "",
	portVersion: "",
	portProtocol: "",
	region: "",
	//country: "country" + 99999 + "IsBest",
	country: "",
	//latitude: "wayy" + 99999,
	latitude: "",
	//longitude: "overthere" + 99999
	longitude: ""
 }
