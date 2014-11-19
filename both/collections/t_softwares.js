TSoftwares = new Meteor.Collection('t_softwares');
TSoftwares.attachSchema(TSoftwareSchema);
/*
 * Add query methods like this:
 *  TSoftwares.findPublic = function () {
 *    return TSoftwares.find({is_public: true});
 *  }
 */
