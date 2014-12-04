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
  hostname: "",
  ip: "",
  region: "",
  country: "",
  latitude: "",
  longitude: "",
  module: ""
};

parseHostsReconng = function(data){
  for(var i = 0; i < data.length; i++){
    THostModel.hostname = data[i][0];
    THostModel.ipv4Addr = data[i][1];
    THostModel.region = data[i][2];
    THostModel.country = data[i][3];
    THostModel.latitude = data[i][4];
    THostModel.longitude = data[i][5];
    THostModel.module = data[i][6];

    THosts.insert(THostModel);
  }
};