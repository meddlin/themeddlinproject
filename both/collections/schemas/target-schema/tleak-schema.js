TLeakSchema = new SimpleSchema({
	leakId: {
		type: String,
		label: "Leak ID",
		optional: true
	},
	description: {
		type: String,
		label: "Description",
		optional: true
	},
	sourceRefs: {
		type: String,
		label: "Source Refs",
		optional: true
	},
	leakType: {
		type: String,
		label: "Leak Type",
		optional: true
	},
	title: {
		type: String,
		label: "Title",
		optional: true
	},
	importDate: {
		type: Date,
		label: "Import Date",
		optional: true
	},
	leakDate: {
		type: Date,
		label: "Leak Date",
		optional: true
	},
	attackers: {
		type: String,
		label: "Attackers",
		optional: true
	},
	numEntries: {
		type: String,
		label: "Num. Entries",
		optional: true
	},
	score: {
		type: String,
		label: "Score",
		optional: true
	},
	numDomainsAffected: {
		type: String,
		label: "Num. Domains Affected",
		optional: true
	},
	attackMethod: {
		type: String,
		label: "Attack Method",
		optional: true
	},
	targetIndustries: {
		type: String,
		label: "Target Industries",
		optional: true
	},
	passwordHash: {
		type: String,
		label: "Password Hash",
		optional: true
	},
	targets: {
		type: String,
		label: "Targets",
		optional: true
	},
	mediaRefs: {
		type: String,
		label: "Media Refs",
		optional: true
	},
	module: {
		type: String,
		label: "Module",
		optional: true
	}
});