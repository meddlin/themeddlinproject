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