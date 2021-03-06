 TSoftwareSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	platform: {
		type: String,
		label: "Platform"
	},
	version: {
		type: String,
		label: "Version",
		optional: true
	},
	owner: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
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
	createdAt: {
		type: Date,
		autoValue: function(){
			if (this.isInsert){
				return new Date();
			}
		},
		optional: true
	},
	updatedAt: {
		type: Date,
		autoValue: function(){
			if (this.isInsert){
				return new Date();
			}
		},
		optional: true
	}
});