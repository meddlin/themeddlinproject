/*
RECON-NG SCHEMA OUTPUT
  +-----------------+
  |    netblocks    |
  +-----------------+
  | netblock | TEXT |
  | module   | TEXT |
  +-----------------+
*/

var tempNetblock = {
	nb: "",
	module: ""
};

parseNetblocksReconng = function(data) {
	for (var i = 0; i < data.length; i++){
		tempNetblock.nb = data[i][0];
		tempNetblock.module = data[i][1];
	}
};