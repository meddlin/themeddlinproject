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
			THosts.insert(THostModel);
			/*THosts.insert({
				ip: THostModel.addr,
				hostname: THostModel.hostname,
				ports: [
					THostModel.portNumber,
					THostModel.portService,
					THostModel.portPortStatus,
					THostModel.portOs,
					THostModel.portVersion,
					THostModel.portProtocol,
					],
				region: THostModel.region,
				country: THostModel.country,
				latitude: THostModel.latitude,
				longitude: THostModel.longitude
			});*/
			console.log(THostModel);
			return result;
		});
		return parseResult;
	}
});