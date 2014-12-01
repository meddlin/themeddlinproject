/*
RECON-NG SCHEMA OUTPUT
  +-------------------+
  |       hosts       |
  +-------------------+
  | host       | TEXT |
  | ip_address | TEXT |
  | region     | TEXT |
  | country    | TEXT |
  | latitude   | TEXT |
  | longitude  | TEXT |
  | module     | TEXT |
  +-------------------+
*/

var tempHost = {
  host: "",
  ip: "",
  region: "",
  country: "",
  latitude: "",
  longitude: "",
  module: ""
};

parseHostsReconng = function(data){
  for(var i = 0; i < data.length; i++){
    tempHost.host = data[i][0];
    tempHost.ip = data[i][1];
    tempHost.region = data[i][2];
    tempHost.country = data[i][3];
    tempHost.latitude = data[i][4];
    tempHost.longitude = data[i][5];
    tempHost.module = data[i][6];
  }
};