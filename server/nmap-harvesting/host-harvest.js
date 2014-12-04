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
				THostModel.ipv4Addr = el.$.addr;
			}
			if(el.$.addrtype != undefined){
				console.log(">> el.$.addrtype"); console.log(el.$.addrtype);
				// add here
				//THostModel.addrtype = el.$.addrtype;
			}
			if(el.$.vendor != undefined){
				console.log(">> el.$.vendor"); console.log(el.$.vendor);
				// add here
				THostModel.nicVendor = el.$.vendor;
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
				THostModel.hostname = el.$.name;
			}
			if(el.$.type != undefined){
				console.log(">> el.$.type: "); console.log(el.$.type);
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