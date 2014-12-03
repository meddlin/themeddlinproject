TLocationSchema = new SimpleSchema({
	latitude: {
		type: String,
		label: "Latitude",
		optional: true
	},
	longitude: {
		type: String,
		label: "Longitude",
		optional: true
	},
	streetAddress: {
		type: String,
		label: "Street Address",
		optional: true
	},
	module: {
		type: String,
		label: "Module",
		optional: true
	}
});