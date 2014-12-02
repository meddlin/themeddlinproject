/*
RECON-NG SCHEMA OUTPUT
  +-------------------+
  |       ports       |
  +-------------------+
  | ip_address | TEXT |
  | host       | TEXT |
  | port       | TEXT |
  | protocol   | TEXT |
  | module     | TEXT |
  +-------------------+
*/

var tempPort = {
	ip: "",
	host: "",
	port: "",
	proto: "",
	module: ""
}

parsePortsReconng = function(data){
	for(var i = 0; i < data.length; i++){
		tempPort.ip = data[i][0];
		tempPort.host = data[i][1];
		tempPort.port = data[i][2];
		tempPort.proto = data[i][3];
		tempPort.module = data[i][4];
	}
}