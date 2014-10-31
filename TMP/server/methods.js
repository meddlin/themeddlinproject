Meteor.methods({
	removeAllFiles: function() {
		return MimeUpload.remove({});
	},
	callPy: function(xmlString){
		console.log("callPy: a Meteor method")
		//console.log(xmlString.toString());
		var childProcess = Meteor.npmRequire("child_process");
		var Fiber = Meteor.npmRequire('fibers');
		var xmlWithoutNewLines = xmlString.replace(/(\r\n|\n|\r)/gm,"");

		/*var pythonFiber = Fiber(function(newString) {
			var file_path = "/Users/meddlin/hw.py";
			console.log("running pythonFiber");
			newString = xmlString;
			console.log(newString);
		});
		pythonFiber.run();*/

		new Fiber(function() {
			var file_path = "/Users/meddlin/hw.py";
			childProcess.exec("python " + file_path + " " + xmlWithoutNewLines.toString(), function(error, stdout, stderr) {
				if (error) console.log("ERROR: " + error);
				if (stdout) console.log("STDOUT: " + stdout);
				if (stderr) console.log("STDERR: " + stderr);
			});
		}).run();
		return "hi";
	},
	parseXML: function(xmlString) {
		var parser = xml2js.parseString;
		parser(xmlString, function(err, result) {
			console.log(">> result");
			console.log(result);
			console.log(">> result.nmaprun");
			console.log(result.nmaprun);
			console.log(">> result.nmaprun.$");
			console.log(result.nmaprun.$);
			console.log(">> result.nmaprun.$.scanner");
			console.log(result.nmaprun.$.scanner);
			console.log(">> result.nmaprun.$.args");
			console.log(result.nmaprun.$.args);
			console.log(">> result.nmaprun.$.start");
			console.log(result.nmaprun.$.start);
			console.log(">> result.nmaprun.$.startstr");
			console.log(result.nmaprun.$.startstr);
			console.log(">> result.nmaprun.$.version");
			console.log(result.nmaprun.$.version);
			console.log(">> result.nmaprun.$.xmloutputversion");
			console.log(result.nmaprun.$.xmloutputversion);
			return result;
		});
	}
});

/*
	Recon-ng: TABLES --> [companies|contacts|credentials|dashboard|domains|globals|hosts|info|keys|leaks|locations|
							modules|netblocks|options|ports|pushpins|schema|source|vulnerabilities|workspaces]
*/

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