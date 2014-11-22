THostSchema = new SimpleSchema({
	ipv4Addr: {
		type: String,
		//regEx: \b(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}\b,
		label: "IPv4 Address",
		optional: true
	},
	ipv6Addr: {
		type: String,
		label: "IPv6 Address",
		optional: true
	},
	macAddr: {
		type: String,
		label: "MAC Address",
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
		type: OSFingerprintSchema,
		optional: true
	},
	region: {
		type: String,
		optional: true
	},
	country: {
		type: String,
		optional: true
	},
	latitude: {
		type: String,
		optional: true
	},
	longitude: {
		type: String,
		optional: true
	},
	owner: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		autoform: {
			options: function(){
				return _.map(Meteor.users.find().fetch(), function(user){
					return {
						label: user.emails[0].address,
						value: user._id
					};
				});
			}
		},
		optional: true
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			if (this.isInsert){
				return new Date();
			}
		},
		optional: true
	},
	updatedAt: {
		type: Date,
		autoValue: function(){
			if (this.isInsert){
				return new Date();
			}
		},
		optional: true
	}
});