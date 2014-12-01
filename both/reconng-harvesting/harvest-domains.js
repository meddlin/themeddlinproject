/*
RECON-NG SCHEMA OUTPUT
  +---------------+
  |    domains    |
  +---------------+
  | domain | TEXT |
  | module | TEXT |
  +---------------+
*/

var tempDomain = {
	domain: "",
	module: ""
};

parseDomainsReconng = function(data){
	for(var i = 0; i < data.length; i++){
	    tempDomain.domain = data[i][0];
	    tempDomain.module = data[i][1];
	}
}