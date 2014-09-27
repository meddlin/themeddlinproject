Meteor.publish( "users", function(){
	return Meteor.users.find();
});
Meteor.publish( "roles", function() {
	return Meteor.roles.find({});
});