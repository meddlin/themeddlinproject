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
			mainNmapHarvest(nmaprun);

			//The Insert
			THosts.insert({
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