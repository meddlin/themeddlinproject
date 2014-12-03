/*
RECON-NG SCHEMA OUTPUT
  +-----------------------+
  |       locations       |
  +-----------------------+
  | latitude       | TEXT |
  | longitude      | TEXT |
  | street_address | TEXT |
  | module         | TEXT |
  +-----------------------+
*/

var tempLocation = {
	latitude: "",
	longitude: "",
	streetAddress: "",
	module: ""
};

parseLocationReconng = function(data){
	for(var i = 0; i < data.length; i++){
	    TLocationModel.lat = data[i][0];
	    TLocationModel.longit = data[i][1];
	    TLocationModel.streetAddr = data[i][2];
	    TLocationModel.module = data[i][3];

	    TLocations.insert(TLocationModel);
	}
};