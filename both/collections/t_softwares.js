TSoftwares = new Meteor.Collection('t_softwares');

/*
 * Add query methods like this:
 *  TSoftwares.findPublic = function () {
 *    return TSoftwares.find({is_public: true});
 *  }
 */
TSoftwares.attachSchema(TSoftwareSchema);