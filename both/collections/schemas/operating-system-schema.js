OperatingSystemSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
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
	platform: {
		type: String,
		label: "Platform",
		optional: true
	},
	version: {
		type: String,
		label: "Version",
		optional: true
	},
	license: {
		type: String,
		label: "License",
		optional: true
	}
});