THosts = new Meteor.Collection('t_hosts');

/*
 * Add query methods like this:
 *  THosts.findPublic = function () {
 *    return THosts.find({is_public: true});
 *  }
 */
THosts.attachSchema(THostSchema);

/*THosts.attachSchema(new SimpleSchema({
	ipv4Addr: {
		type: String,
		//regEx: \b(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}\b,
		label: "IPv4",
		optional: true
	},
	ipv6Addr: {
		type: String,
		label: "IPv6",
		optional: true
	},
	macAddr: {
		type: String,
		label: "MAC",
		optional: true
	},
	nicVendor: {
		type: String,
		label: "NIC Vendor",
		optional: true
	},
	ports: {
		type: [PortSchema],
		optional: true
	},
	osFingerprint: {
		type: OSFingerPrintSchema,
		optional: true
	}
}));*/



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