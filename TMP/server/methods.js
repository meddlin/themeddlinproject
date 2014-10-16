Meteor.methods({
	removeAllFiles: function() {
		return MimeUpload.remove({});
	}
});

/* This is only to stay in as long as we need it. */
var port = {
	number: "80",
	service: "serv",
	portStatus: "open",
	os: "winduhrs",
	version: "ver",
	protocol: "coolio"
}

var seedData = function(){
	NetworkToolCollection.remove({}); //clears the collection
	OperatingSystemsCollection.remove({});
	SoftwareCollection.remove({});
	THostsCollection.remove({});
	TOperatingSystemsCollection.remove({});
	TSoftwareCollection.remove({});
	TUsersCollection.remove({});

	for (var i = 0; i < 9; i++){
		NetworkToolCollection.insert({
			name: "NetTool" + i,
			link: "http://nettool" + i + ".com"
		});
		OperatingSystemsCollection.insert({
			name: "OS" + i,
			version: "version" + i,
			platform: "x" + "64"
		});
		SoftwareCollection.insert({
			name: "prog" + i,
			version: "version" + i
		});
		THostsCollection.insert({
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
		});
		TOperatingSystemsCollection.insert({
			name: "OS" + i,
			version: "version" + i,
			platform: "x" + "64"
		});
		TSoftwareCollection.insert({
			name: "prog" + i,
			version: "version" + i
		});
		TUsersCollection.insert({
			fname: "fname" + i,
			midname: "midname" + i,
			lname: "lname" + i,
			email: "some" + i + "@email.com",
			hash: "asdf" + i*934 + "asdf",
			password: "whatiftheyhadasecurepassword?",
			title: "Capt.",
			username: "Jack",
			region: "Sparrow",
			country: "Bermuda",
			vuln: "heckNo"
		})
	}
};

Meteor.startup(seedData);