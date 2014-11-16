PortSchema = new SimpleSchema({
	protocol: {
		type: String,
		label: "Protocol",
		optional: true
	},
	portId: {
		type: String,
		label: "Port ID",
		optional: true
	},
	state: {
		type: PortStateSchema,
		optional: true
	},
	service: {
		type: PortServiceSchema,
		optional: true
	}
});