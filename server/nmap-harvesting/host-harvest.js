grabHostStatusElements = function (el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.up != undefined){
				console.log(">> el.$.up"); console.log(el.$.up);
			}
			if(el.$.reason != undefined){
				console.log(">> el.$.reason"); console.log(el.$.reason);
			}
			if(el.$.reason_ttl != undefined){
				console.log(">> el.$.reason_ttl"); console.log(el.$.reason_ttl);
			}
		}
	}
};

grabHostAddressElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.addr != undefined){
				console.log(">> el.$.addr"); console.log(el.$.addr);
				// add here
				THosts.addr = el.$.addr;
			}
			if(el.$.addrtype != undefined){
				console.log(">> el.$.addrtype"); console.log(el.$.addrtype);
				// add here
				THosts.addrtype = el.$.addrtype;
			}
			if(el.$.vendor != undefined){
				console.log(">> el.$.vendor"); console.log(el.$.vendor);
				// add here
				THosts.vendor = el.$.vendor;
			}
		}
	}
};

grabHostHostnamesElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.hostname != undefined){
			el.hostname.forEach(grabHostHostnamesHostnameElements);
		}
	}
};

grabHostHostnamesHostnameElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.name != undefined){
				console.log(">> el.$.name: "); console.log(el.$.name);
				THosts.hostname = el.$.name;
			}
			if(el.$.type != undefined){
				console.log(">> el.$.type: "); console.log(el.$.type);
			}
		}
	}
};

grabHostPortsElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.extraports != undefined){
			console.log(">> el.extraports: "); console.log(el.extraports);
			el.extraports.forEach(grabHostPortsExtraportsElements);
		}
		if(el.port != undefined){
			console.log(">> el.port: "); console.log(el.port);
			el.port.forEach(grabHostPortsPortElements);
		}
	}
};

grabHostPortsExtraportsElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
		}
	}
};

grabHostPortsPortElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.protocol != undefined){
				console.log(">> el.$.protocol: "); console.log(el.$.protocol);
			}
			if(el.$.portid != undefined){
				console.log(">> el.$.portid: "); console.log(el.$.portid);
				THosts.portNumber = el.$.portid;
			}
		}
		if(el.state != undefined){
			console.log(">> el.state: "); console.log(el.state);
			el.state.forEach(grabHostPortsPortStateElements);
		}
		if(el.service != undefined){
			console.log(">> el.service: "); console.log(el.service);
			el.service.forEach(grabHostPortsPortServiceElements);
		}
	}
};

grabHostPortsPortStateElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.state != undefined){
				console.log(">> el.$.state: "); console.log(el.$.state);
			}
			if(el.$.reason != undefined){
				console.log(">> el.$.reason: "); console.log(el.$.reason);
			}
			if(el.$.reason_ttl != undefined){
				console.log(">> el.$.reason_ttl: "); console.log(el.$.reason_ttl);
			}
		}
	}
};

grabHostPortsPortServiceElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.name != undefined){
				console.log(">> el.$.name: "); console.log(el.$.name);
			}
			if(el.$.product != undefined){
				console.log(">> el.$.product: "); console.log(el.$.product);
			}
			if(el.$.version != undefined){
				console.log(">> el.$.version: "); console.log(el.$.version);
			}
			if(el.$.extrainfo != undefined){
				console.log(">> el.$.extrainfo: "); console.log(el.$.extrainfo);
			}
			if(el.$.method != undefined){
				console.log(">> el.$.method: "); console.log(el.$.method);
			}
			if(el.$.conf != undefined){
				console.log(">> el.$.conf: "); console.log(el.$.conf);
			}
		}
	}
};

grabHostOsElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.portused != undefined){
			console.log(">> el.portused: "); console.log(el.portused);
			el.portused.forEach(grabHostOsPortusedElements);
		}
		if(el.osmatch != undefined){
			console.log(">> el.osmatch: "); console.log(el.osmatch);
			el.osmatch.forEach(grabHostOsOsmatchElements);
		}
		if(el.osfingerprint != undefined){
			console.log(">> el.osfingerprint: "); console.log(el.osfingerprint);
			el.osfingerprint.forEach(grabHostOsOsfingerprintElements);
		}
	}
};

grabHostOsPortusedElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.state != undefined){
				console.log(">> el.$.state: "); console.log(el.$.state);
			}
			if(el.$.proto != undefined){
				console.log(">> el.$.proto: "); console.log(el.$.proto);
			}
			if(el.$.portid != undefined){
				console.log(">> el.$.portid: "); console.log(el.$.portid);
			}
		}
	}
};

grabHostOsOsmatchElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.name != undefined){
				console.log(">> el.$.name: "); console.log(el.$.name);
				THosts.portOs = el.$.name;
			}
			if(el.$.accuracy != undefined){
				console.log(">> el.$.accuracy: "); console.log(el.$.accuracy);
			}
			if(el.$.line != undefined){
				console.log(">> el.$.line: "); console.log(el.$.line);
			}
		}
		if(el.osclass != undefined){
			el.osclass.forEach(grabHostOsOsmatchOsClassElements);
		}
	}
};

grabHostOsOsmatchOsClassElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.type != undefined){
				console.log(">> el.$.type: "); console.log(el.$.type);
			}
			if(el.$.vendor != undefined){
				console.log(">> el.$.vendor: "); console.log(el.$.vendor);
			}
			if(el.$.osfamily !=  undefined){
				console.log(">> el.$.osfamily: "); console.log(el.$.osfamily);
			}
			if(el.$.osgen != undefined){
				console.log(">> el.$.osgen: "); console.log(el.$.osgen);
			}
			if(el.$.accuracy != undefined){
				console.log(">> el.$.accuracy: "); console.log(el.$.accuracy);
			}
		}
		if(el.cpe != undefined){
			el.cpe.forEach(grabHostOsOsmatchOsClassCpeElements);
		}
	}
};

grabHostOsOsmatchOsClassCpeElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		console.log(">> el: "); console.log(el);
	}
};

grabHostOsOsfingerprintElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.fingerprint != undefined){
				console.log(">> el.$.fingerprint: "); console.log(el.$.fingerprint);
			}
		}
	}
};

grabHostUptimeElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.seconds != undefined){
				console.log(">> el.$.seconds: "); console.log(el.$.seconds);
			}
			if(el.$.lastboot != undefined){
				console.log(">> el.$.lastboot: "); console.log(el.$.lastboot);
			}
		}
	}
};

grabHostDistanceElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.value != undefined){
				console.log(">> el.$.value: "); console.log(el.$.value);
			}
		}
	}
};

grabHostTcpsequenceElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.index != undefined){
				console.log(">> el.$.value: "); console.log(el.$.value);
			}
			if(el.$.difficulty != undefined){
				console.log(">> el.$.difficulty: "); console.log(el.$.difficulty);
			}
			if(el.$.values != undefined){
				console.log(">> el.$.values: "); console.log(el.$.values);
			}
		}
	}
};

grabHostIpidsequenceElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.class != undefined){
				console.log(">> el.$.class: "); console.log(el.$.class);
			}
			if(el.$.values != undefined){
				console.log(">> el.$.values: "); console.log(el.$.values);
			}
		}
	}
};
grabHostTcptssequenceElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.class != undefined){
				console.log(">> el.$.class: "); console.log(el.$.class);
			}
			if(el.$.values != undefined){
				console.log(">> el.$.values: "); console.log(el.$.values);
			}
		}
	}
};
grabHostTimesElements = function(el, index){
	console.log("a" + index + ": ");
	if(el != undefined){
		if(el.$ != undefined){
			console.log(">> el.$: "); console.log(el.$);
			if(el.$.srtt != undefined){
				console.log(">> el.$.srtt: "); console.log(el.$.srtt);
			}
			if(el.$.rttvar != undefined){
				console.log(">> el.$.rttvar: "); console.log(el.$.rttvar);
			}
			if(el.$.to != undefined){
				console.log(">> el.$.to: "); console.log(el.$.to);
			}
		}
	}
};