TPushpinSchema = new SimpleSchema({
	source: {
		type: String,
		label: "Source",
		optional: true
	},
	screenName: {
		type: String,
		label: "Screen Name",
		optional: true
	},
	profileName: {
		type: String,
		label: "Profile Name",
		optional: true
	},
	profileUrl: {
		type: String,
		label: "Profile URL",
		optional: true
	},
	mediaUrl: {
		type: String,
		label: "Media URL",
		optional: true
	},
	thumbUrl: {
		type: String,
		label: "Thumb URL",
		optional: true
	},
	message: {
		type: String,
		label: "Message",
		optional: true
	},
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
	time: {
		type: String,
		label: "Time",
		optional: true
	},
	module: {
		type: String,
		label: "Module",
		optional: true
	}
});