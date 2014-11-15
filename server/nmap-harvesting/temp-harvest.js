/* NMAP HARVESTING -- "I want 50 percent of ye plunder." */

//function grabXXElements(el, index){} do this for every <tag> that can have multiples underneath it
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

grabRunstatsFinishedElements = function (el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.time != undefined){
			console.log(">> el.finished.time: "); console.log(el.$.time);
			}
			if(el.$.timestr != undefined){
				console.log(">> el.finished.timestr: "); console.log(el.$.timestr);
			}
			if(el.$.elapsed != undefined){
				console.log(">> el.finished.elapsed: "); console.log(el.$.elapsed);
			}
			if(el.$.summary != undefined){
				console.log(">> el.finished.summary: "); console.log(el.$.summary);
			}
			if(el.$.exit != undefined){
				console.log(">> el.finished.exit: "); console.log(el.$.exit);
			}
		}
	}
};

grabRunstatsHostsElements = function (el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.up != undefined){
				console.log(">> el.$.up: "); console.log(el.$.up);
			}
			if(el.$.down != undefined){
				console.log(">> el.$.down: "); console.log(el.$.down);
			}
			if(el.$.total != undefined){
				console.log(">> el.$.total: "); console.log(el.$.total);
			}
		}
	}
};
/* END NMAP HARVESTING */