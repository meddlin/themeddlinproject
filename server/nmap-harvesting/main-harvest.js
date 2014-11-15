/* NMAP HARVESTING -- "I want 50 percent of ye plunder." */

//function grabXXElements(el, index){} do this for every <tag> that can have multiples underneath it

mainNmapHarvest = function(nmaprun){
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
};

grabScaninfoElements = function (el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.type != undefined){
				console.log(">> el.$.type: "); console.log(el.$.type);
			}
			if(el.$.protocol != undefined){
				console.log(">> el.$.protocol: "); console.log(el.$.protocol);
			}
			if(el.$.numservices != undefined){
				console.log(">> el.$.numservices: "); console.log(el.$.numservices);
			}
			if(el.$.services != undefined){
				console.log(">> el.$.services: "); console.log(el.$.services);
			}
		}
	}
};

grabVerboseElements = function (el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el"); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$"); console.log(el.$);
			if(el.$.level != undefined){
				console.log(">> el.$.level"); console.log(el.$.level);
			}
		}
	}
};

grabDebuggingElements = function (el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el"); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$"); console.log(el.$);
			if(el.$.level != undefined){
				console.log(">> el.$.level"); console.log(el.$.level);
			}
		}
	}
};

grabHostElements = function (el, index){ //iterates over n-number of <host> tags
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.status != undefined){
			console.log(">> el.status: "); console.log(el.status);
			el.status.forEach(grabHostStatusElements);
		}
		if(el.address != undefined){
			console.log(">> el: address"); console.log(el.address);
			el.address.forEach(grabHostAddressElements);
		}
		if(el.hostnames != undefined){
			console.log(">> el: hostnames"); console.log(el.hostnames);
			el.hostnames.forEach(grabHostHostnamesElements);
		}
		if(el.ports != undefined){
			console.log(">> el: ports"); console.log(el.ports);
			el.ports.forEach(grabHostPortsElements);
		}
		if(el.os != undefined){
			console.log(">> el: os"); console.log(el.os);
			el.os.forEach(grabHostOsElements);
		}
		if(el.uptime != undefined){
			console.log(">> el: uptime"); console.log(el.uptime);
			el.uptime.forEach(grabHostUptimeElements);
		}
		if(el.distance != undefined){
			console.log(">> el: distance"); console.log(el.distance);
			el.distance.forEach(grabHostDistanceElements);
		}
		if(el.tcpsequence != undefined){
			console.log(">> el: tcpsequence"); console.log(el.tcpsequence);
			el.tcpsequence.forEach(grabHostTcpsequenceElements);
		}
		if(el.ipidsequence != undefined){
			console.log(">> el: ipidsequence"); console.log(el.ipidsequence);
			el.ipidsequence.forEach(grabHostIpidsequenceElements);
		}
		if(el.tcptssequence != undefined){
			console.log(">> el: tcptssequence"); console.log(el.tcptssequence);
			el.tcptssequence.forEach(grabHostTcptssequenceElements);
		}
		if(el.times != undefined){
			console.log(">> el: times"); console.log(el.times);
			el.times.forEach(grabHostTimesElements);
		}
	}
};

grabRunstatsElements = function (el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.finished != undefined){
			console.log(">> el.finished: "); console.log(el.finished);
			el.finished.forEach(grabRunstatsFinishedElements);
		}
		if(el.hosts != undefined){
			console.log(">> el.hosts: "); console.log(el.hosts);
			el.hosts.forEach(grabRunstatsHostsElements);
		}
	}
};
/* END NMAP HARVESTING */