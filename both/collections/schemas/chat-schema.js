ChatSchema = new SimpleSchema({
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
		},
		optional: true
	},
	ownerEmail: {
		type: String,
		label: "Owner Email",
		optional: true
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			if (this.isInsert){
				return new Date();
			}
		},
		optional: true
	},
	message: {
		type: String,
		label: "Message"
	}
});