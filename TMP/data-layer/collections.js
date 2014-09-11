//MyCollection = new Meteor.Colelction('myCollection');

/*
Users' Name, email, password, Targets{}
*/
AccountsCollection = new Meteor.Collection('Accounts');

ProjectsCollection = new Meteor.Collection('Projects', {
	transform: function (document){
		return new Project(document);
	}
});

UploadsCollection = new Meteor.Collection('Uplods', {
	transform: function (document){
		return new Upload(document);
	}
});

/* THE_BAY: Holds target-level information */
TargetsCollection = new Meteor.Collection('Targets', {
	transform: function(document){
		return new Target(document);
	}
});
T_HostsCollection = new Meteor.Collection('T_Hosts', {
	transform: function(document){
		return new T_Host(document);
	}
});
T_UsersCollection = new Meteor.Collection('T_Users', {
	transform: function(document){
		return new T_User(document);
	}
});
T_EmailsCollection = new Meteor.Collection('T_EmailsCollection', {
	transform: function(document){
		return new T_Email(document);
	}
});
T_OperatingSystemsCollection = new Meteor.Collection('T_OperatingSystems', {
	transform: function(document){
		return new T_OperatingSystem(document);
	}
});
T_SoftwareCollection = new Meteor.Collection('T_Software', {
	transform: function(document){
		return new T_Software(document);
	}
});
T_MetaDocumentsCollection = new Meteor.Collection('T_MetaDocuments', {
	transform: function(document){
		return new T_MetaDocument(document);
	}
});

/*
These hold standard information about the various OS's, software, tools, etc.
which are found and/or used. This information could probably be held in static
JSON or XML files, but may fit the design better by being in the database.
 */
OperatingSystemsCollection = new Meteor.Collection('OperatingSystems', {
	transform: function(document){
		return new OperatingSystem(document);
	}
});
SoftwareCollection = new Meteor.Collection('Software', {
	transform: function(document){
		return new Software(document);
	}
});
ReconToolsCollection = new Meteor.Collection('ReconTools', {
	transform: function(document){
		return new ReconTool(document);
	}
});
