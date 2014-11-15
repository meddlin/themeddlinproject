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