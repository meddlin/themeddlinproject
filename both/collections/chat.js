Chat = new Meteor.Collection('chat');
Chat.attachSchema(ChatSchema);
/*
 * Add query methods like this:
 *  Chat.findPublic = function () {
 *    return Chat.find({is_public: true});
 *  }
 */