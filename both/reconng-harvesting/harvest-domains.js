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
	    TDomainModel.domain = data[i][0];
	    TDomainModel.module = data[i][1];

	    TDomains.insert(TDomainModel);
	}
}