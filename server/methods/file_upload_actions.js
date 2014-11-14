Meteor.methods({
	removeAllFiles: function() {
		return MimeUpload.remove({});
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