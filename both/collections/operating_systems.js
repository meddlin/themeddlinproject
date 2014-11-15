OperatingSystems = new Meteor.Collection('operating_systems');

/*
 * Add query methods like this:
 *  OperatingSystems.findPublic = function () {
 *    return OperatingSystems.find({is_public: true});
 *  }
 */


/*
	Follows the basic information given in the "brief description box" on the right-side
	of the Wikipedia page.
	ex: https://en.wikipedia.org/wiki/Windows_7
 */
OperatingSystems.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	url: {
		type: String,
		label: "URL",
		optional: true
	},

	developer: {
		type: String,
		label: "Developer",
		optional: true
	},
	sourceModel: {
		type: String,
		label: "Source Model",
		optional: true
	},
	releasedToManufacturing: {
		type: Date,
		label: "RTM",
		optional: true
	},
	generalAvailability: {
		type: String,
		label: "General Availability",
		optional: true
	},
	latestRelease: {
		type: Date,
		label: "Latest Release",
		optional: true
	},
	updateMethod: {
		type: String,
		label: "Update Method",
		optional: true
	},
	platforms: {
		type: String,
		label: "Platforms",
		optional: true
	},
	kernelType: {
		type: String,
		label: "Kernel Type",
		optional: true
	},
	license: {
		type: String,
		label: "License",
		optional: true
	},
	precededBy: {
		type: String,
		label: "Preceded By",
		optional: true
	},
	succeddedBy: {
		type: String,
		label: "Succeded By",
		optional: true
	}
}));