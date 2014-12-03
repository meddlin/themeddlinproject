TUserSchema = new SimpleSchema({
	fname: {
		type: String,
		label: "First Name",
		optional: true,
	},
	mname: {
		type: String,
		label: "Middle Name",
		optional: true
	},
	lname: {
		type: String,
		label: "Last Name",
		optional: true
	},
	title: {
		type: String,
		label: "Title",
		optional: true
	},
	username: {
		type: String,
		label: "Username",
		optional: true
	},
	email: {
		type: String,
		label: "Email",
		optional: true
	},
	password: {
		type: String,
		label: "Password",
		optional: true
	},
	passHash: {
		type: String,
		label: "Password Hash",
		optional: true
	},
	type: {
		type: String,
		label: "Type",
		optional: true
	},
	leak: {
		type: String,
		label: "Leak",
		optional: true
	},
	hasPGPKey: {
		type: Boolean,
		label: "PGP Key",
		optional: true
	},
	region: {
		type: String,
		label: "Region",
		optional: true
	},
	country: {
		type: String,
		label: "Country",
		optional: true
	},
	vuln: {
		type: String,
		label: "Vulnerable",
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