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
	storeXML: function(xmlString) {
		check(xmlString, String); //enforce strict types
		//check(userId, some-type);
		//check(insertId, some-type);
		/*
			store: JSON data, user, network-tool, time, _idOfXML
		*/

		var parser = xml2js.parseString;
		var parseResult = parser(xmlString, function(err, result) {

			var nmaprun = result.nmaprun;
			console.log(">> result");
			console.log(result);

			console.log(">> nmaprun.$"); console.log(nmaprun.$);
			console.log(">> nmaprun.$.scanner"); console.log(nmaprun.$.scanner);
			console.log(">> nmaprun.$.args"); console.log(nmaprun.$.args);
			console.log(">> nmaprun.$.start"); console.log(nmaprun.$.start);
			console.log(">> nmaprun.$.startstr"); console.log(nmaprun.$.startstr);
			console.log(">> nmaprun.$.version"); console.log(nmaprun.$.version);
			console.log(">> nmaprun.$.xmloutputversion"); console.log(nmaprun.$.xmloutputversion);

			console.log(">> nmaprun.scaninfo");
			console.log(nmaprun.scaninfo);
			if(nmaprun.scaninfo != undefined){
				nmaprun.scaninfo.forEach(grabScaninfoElements);
			}else{
				console.log("nmaprun.scaninfo UNDEFINED");
			}

			console.log(">> nmaprun.verbose");
			console.log(nmaprun.verbose);
			if(nmaprun.verbose != undefined){
				nmaprun.verbose.forEach(grabVerboseElements);
			}else{
				console.log("nmaprun.verbose UNDEFINED");
			}

			console.log(">> nmaprun.debugging");
			console.log(nmaprun.debugging);
			if(nmaprun.debugging != undefined){
				nmaprun.debugging.forEach(grabDebuggingElements);
			}else{
				console.log("nmaprun.debugging UNDEFINED");
			}

			console.log(">> nmaprun.host");
			console.log(nmaprun.host);
			if(nmaprun.host != undefined){
				nmaprun.host.forEach(grabHostElements);
			}else{
				console.log("nmaprun.host UNDEFINED");
			}

			console.log(">> nmaprun.runstats");
			console.log(nmaprun.runstats);
			if(nmaprun.runstats != undefined){
				nmaprun.runstats.forEach(grabRunstatsElements);
			}else{
				console.log("nmaprun.runstats UNDEFINED");
			}

			//The Insert
			THostsCollection.insert({
				ip: THost.addr,
				hostname: THost.hostname,
				ports: [
					THost.portNumber,
					THost.portService,
					THost.portPortStatus,
					THost.portOs,
					THost.portVersion,
					THost.portProtocol,
					],
				region: THost.region,
				country: THost.country,
				latitude: THost.latitude,
				longitude: THost.longitude
			});
			console.log(THost);
			return result;
		});
		return parseResult;
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
	/*THostsCollection.remove({});*/
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
