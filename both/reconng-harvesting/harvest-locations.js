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
	lat: "",
	longit: "",
	streetAddr: "",
	module: ""
};

parseLocationReconng = function(data){
	for(var i = 0; i < data.length; i++){
	    tempLocation.lat = data[i][0];
	    tempLocation.longit = data[i][1];
	    tempLocation.streetAddr = data[i][2];
	    tempLocation.module = data[i][3];
	}
};