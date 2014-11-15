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