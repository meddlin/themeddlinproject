RecentActivity = new Meteor.Collection('recent_activity');

/*
 * Add query methods like this:
 *  RecentActivity.findPublic = function () {
 *    return RecentActivity.find({is_public: true});
 *  }
 */
RecentActivity.attachSchema(new SimpleSchema({
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
	action: {
		type: String,
		label: "Action"
	}
}));