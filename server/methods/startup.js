/*
SERVER STARTUP FUNCTIONS
	All Meteor.startup(); should be placed at the bottom of the file so that any local
	functions that are defined within this file can be accessed.
*/

var port = {
	number: "80",
	service: "serv",
	portStatus: "open",
	os: "winduhrs",
	version: "ver",
	protocol: "coolio"
}

var seedData = function(){
	NetworkTools.remove({}); //clears the collection
	OperatingSystems.remove({});
	Softwares.remove({});
	/*THostsCollection.remove({});*/
	TOperatingSystems.remove({});
	TSoftwares.remove({});
	TUsers.remove({});

	for (var i = 0; i < 9; i++){
		NetworkTools.insert({
			name: "NetTool" + i,
			link: "http://nettool" + i + ".com"
		});
		OperatingSystems.insert({
			name: "OS" + i,
			version: "version" + i,
			platform: "x" + "64"
		});
		Softwares.insert({
			name: "prog" + i,
			version: "version" + i
		});
		/*THostsCollection.insert({
			ip: "101." + i + "." + i + "." + i,
			hostname: "hostname" + i + ".com",
			ports: [
				port.number + i,
				port.service + i,
				port.portStatus,
				port.os,
				port.version + i,
				port.protocol + i
				],
			region: "region" + i,
			country: "country" + i + "IsBest",
			latitude: "wayy" + i,
			longitude: "overthere" + i
		});*/
		TOperatingSystems.insert({
			name: "OS" + i,
			version: "version" + i,
			platform: "x" + "64"
		});
		TSoftwares.insert({
			name: "prog" + i,
			platform: "platform" + i,
			version: "version" + i
		});
		TUsers.insert({
			fname: "fname" + i,
			mname: "midname" + i,
			lname: "lname" + i,
			title: "Capt.",
			email: "some" + i + "@email.com",
			password: "whatiftheyhadasecurepassword?",
			passHash: "wh471f7h3yh4d453cur3p455w0rd?",
			username: "Jack",
			region: "Sparrow",
			country: "Bermuda",
			vuln: "heckNo"
		})
	}
};

Meteor.startup(seedData);