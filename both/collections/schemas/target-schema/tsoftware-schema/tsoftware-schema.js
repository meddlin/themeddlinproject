 TSoftwareSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	platform: {
		type: String,
		label: "Platform"
	},
	version: {
		type: String,
		label: "Version",
		optional: true
	}
});