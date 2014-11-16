THostSchema = new SimpleSchema({
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
		type: OSFingerprintSchema,
		optional: true
	}
});