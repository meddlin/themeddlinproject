Chat = new Meteor.Collection('chat');

/*
 * Add query methods like this:
 *  Chat.findPublic = function () {
 *    return Chat.find({is_public: true});
 *  }
 */
Chat.attachSchema(new SimpleSchema({
	owner: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		autoValue: function(){
			if (this.isInsert){
				return Meteor.userId();
			}
		},
		autoform: {
			options: function(){
				return _.map(Meteor.users.find().fetch(), function(user){
					return {
						label: user.emails[0].address,
						value: user._id
					};
				});
			}
		}
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			if (this.isInsert){
				return new Date();
			}
		}
	},
	/*username: {
		type: String,
		label: "User",
	},*/
	message: {
		type: String,
	}
}));