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
    TLeakModel.leak = data[i][0];
    TLeakModel.description = data[i][1];
    TLeakModel.source = data[i][2];
    TLeakModel.leaktype = data[i][3];
    TLeakModel.title = data[i][4];
    TLeakModel.importDate = data[i][5];
    TLeakModel.leakDate = data[i][6];
    TLeakModel.attackers = data[i][7];
    TLeakModel.numEntries = data[i][8];
    TLeakModel.score = data[i][9];
    TLeakModel.numDomainsAffected = data[i][10];
    TLeakModel.attackMethod = data[i][11];
    TLeakModel.targetIndustries = data[i][12];
    TLeakModel.passwordHash = data[i][13];
    TLeakModel.targets = data[i][14];
    TLeakModel.mediaRefs = data[i][15];
    TLeakModel.module = data[i][16];

    TLeaks.insert(TLeakModel);
  }
};