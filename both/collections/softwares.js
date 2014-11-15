Softwares = new Meteor.Collection('softwares');

/*
 * Add query methods like this:
 *  Softwares.findPublic = function () {
 *    return Softwares.find({is_public: true});
 *  }
 */

/*
	Follows the basic information given in the "brief description box" on the right-side
	of the Wikipedia page.
	ex: https://en.wikipedia.org/wiki/Adobe_Acrobat
 */
Softwares.attachSchema(new SimpleSchema({
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
	programmingLanguage: {
		type: String,
		label: "Programming Language",
		optional: true
	},
	version: {
		type: String,
		label: "Version",
		optional: true
	},
	platforms: {
		type: String,
		label: "Platforms",
		optional: true
	},
	approxSize: {
		type: String,
		label: "Approximate Size",
		optional: true
	},
	license: {
		type: String,
		label: "License",
		optional: true
	}
}));