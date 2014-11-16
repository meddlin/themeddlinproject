PortStateSchema = new SimpleSchema({
	status: {
		type: String,
		label: "Status",
		optional: true
	},
	reason: {
		type: String,
		label: "Reason",
		optional: true
	},
	reasonTtl: {
		type: String,
		label: "Reason TTL",
		optional: true
	}
});