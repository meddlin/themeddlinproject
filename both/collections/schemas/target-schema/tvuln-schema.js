TVulnSchema = new SimpleSchema({
	host: {
		type: String,
		label: "Host",
		optional: true
	},
	reference: {
		type: String,
		label: "Reference",
		optional: true
	},
	example: {
		type: String,
		label: "Example",
		optional: true
	},
	publishDate: {
		type: Date,
		label: "Publish Date",
		optional: true
	},
	category: {
		type: String,
		label: "Category",
		optional: true
	},
	status: {
		type: String,
		label: "Status",
		optional: true
	},
	module: {
		type: String,
		label: "Module",
		optional: true
	}
});