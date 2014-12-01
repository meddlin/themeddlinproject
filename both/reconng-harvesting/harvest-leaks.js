/*
RECON-NG SCHEMA OUTPUT
  +-----------------------------+
  |            leaks            |
  +-----------------------------+
  | leak_id              | TEXT |
  | description          | TEXT |
  | source_refs          | TEXT |
  | leak_type            | TEXT |
  | title                | TEXT |
  | import_date          | TEXT |
  | leak_date            | TEXT |
  | attackers            | TEXT |
  | num_entries          | TEXT |
  | score                | TEXT |
  | num_domains_affected | TEXT |
  | attack_method        | TEXT |
  | target_industries    | TEXT |
  | password_hash        | TEXT |
  | targets              | TEXT |
  | media_refs           | TEXT |
  | module               | TEXT |
  +-----------------------------+
*/

var tempLeak = {
  leak: "",
  description: "",
  source: "",
  leaktype: "",
  title: "",
  importDate: "",
  leakDate: "",
  attackers: "",
  numEntries: "",
  score: "",
  numDomainsAffected: "",
  attackMethod: "",
  targetIndustries: "",
  passwordHash: "",
  targets: "",
  mediaRefs: "",
  module: ""
};

parseLeaksReconng = function(data){
  for(var i = 0; i < data.length; i++){
    tempLeak.leak = data[i][0];
    tempLeak.description = data[i][1];
    tempLeak.source = data[i][2];
    tempLeak.leaktype = data[i][3];
    tempLeak.title = data[i][4];
    tempLeak.importDate = data[i][5];
    tempLeak.leakDate = data[i][6];
    tempLeak.attackers = data[i][7];
    tempLeak.numEntries = data[i][8];
    tempLeak.score = data[i][9];
    tempLeak.numDomainsAffected = data[i][10];
    tempLeak.attackMethod = data[i][11];
    tempLeak.targetIndustries = data[i][12];
    tempLeak.passwordHash = data[i][13];
    tempLeak.targets = data[i][14];
    tempLeak.mediaRefs = data[i][15];
    tempLeak.module = data[i][16];
  }
};