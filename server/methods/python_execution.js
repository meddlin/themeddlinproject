Meteor.methods({
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
	}
});