OSFingerprintSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		optional: true
	},
	accuracy: {
		type: String,
		label: "Accuracy",
		optional: true
	},
	line: {
		type: String,
		label: "Line",
		optional: true
	},
	type: {
		type: String,
		label: "Type",
		optional: true
	},
	vendor: {
		type: String,
		label: "Vendor",
		optional: true
	},
	osfamily: {
		type: String,
		label: "OS Family",
		optional: true
	},
	osgen: {
		type: String,
		label: "OS Gen",
		optional: true
	},
	osclass: {
		type: String,
		label: "OS Class",
		optional: true
	},
	cpe: {
		type: String,
		label: "CPE",
		optional: true
	},
	fingerprint: {
		type: String,
		label: "Fingerprint",
		optional: true
	}
});