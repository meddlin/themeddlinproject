//MyCollection = new Meteor.Colelction('myCollection');

/*
Users' Name, email, password, Targets{}
*/
Accounts = new Meteor.Collection('Accounts');

/* THE_BAY: Holds target-level information */
Targets = new Meteor.Collection('Targets');
Hosts = new Meteor.Collection('Hosts');

/*
These hold standard information about the various OS's, software, tools, etc.
which are found and/or used. This information could probably be held in static
JSON or XML files, but may fit the design better by being in the database.
 */
OperatingSystems = new Meteor.Collection('OperatingSystems');
Software = new Meteor.Collection('Software');
ReconTools = new Meteor.Collection('ReconTools');