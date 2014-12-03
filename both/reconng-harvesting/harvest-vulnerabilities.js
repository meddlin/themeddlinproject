/*
RECON-NG SCHEMA OUTPUT
  +---------------------+
  |   vulnerabilities   |
  +---------------------+
  | host         | TEXT |
  | reference    | TEXT |
  | example      | TEXT |
  | publish_date | TEXT |
  | category     | TEXT |
  | status       | TEXT |
  | module       | TEXT |
  +---------------------+
*/

var tempVulnerability = {
  host: "",
  reference: "",
  example: "",
  publishDate: "",
  category: "",
  status: "",
  module: ""
}

parseVulnerabilitiesReconng = function(data){
  for(var i = 0; i < data.length; i++){
    tempVulnerability.host = data[i][0];
    tempVulnerability.reference = data[i][1];
    tempVulnerability.example = data[i][2];
    tempVulnerability.publishDate = data[i][3];
    tempVulnerability.category = data[i][4];
    tempVulnerability.status = data[i][5];
    tempVulnerability.module = data[i][6];
  }
};