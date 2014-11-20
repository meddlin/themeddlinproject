Softwares = new Meteor.Collection('softwares');
Softwares.attachSchema(SoftwareSchema);
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