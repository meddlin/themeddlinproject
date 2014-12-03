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
    TVulnModel.host = data[i][0];
    TVulnModel.reference = data[i][1];
    TVulnModel.example = data[i][2];
    TVulnModel.publishDate = data[i][3];
    TVulnModel.category = data[i][4];
    TVulnModel.status = data[i][5];
    TVulnModel.module = data[i][6];

    TVulns.insert(TVulnModel);
  }
};