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
	netblock: "",
	module: ""
};

parseNetblocksReconng = function(data) {
	for (var i = 0; i < data.length; i++){
		TNetblockModel.netblock = data[i][0];
		TNetblockModel.module = data[i][1];

		TNetblocks.insert(TNetblockModel);
	}
};