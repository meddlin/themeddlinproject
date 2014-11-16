PortServiceSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		optional: true
	},
	product: {
		type: String,
		label: "Product",
		optional: true
	},
	version: {
		type: String,
		label: "Version",
		optional: true
	},
	extraInfo: {
		type: String,
		label: "Extra Info",
		optional: true
	},
	method: {
		type: String,
		label: "Method",
		optional: true
	},
	conf: {
		type: String,
		label: "Conf",
		optional: true
	},
	servicefp: {
		type: String,
		label: "Service FP",
		optional: true
	},
});