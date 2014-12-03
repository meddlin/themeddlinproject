TCompanySchema = new SimpleSchema({
	company: {
		type: String,
		label: "Company",
		optional: true
	},
	description: {
		type: String,
		label: "Description",
		optional: true
	},
	module: {
		type: String,
		label: "Module",
		optional: true
	}
});