/*
RECON-NG SCHEMA OUPTUT
  +-----------------+
  |   credentials   |
  +-----------------+
  | username | TEXT |
  | password | TEXT |
  | hash     | TEXT |
  | type     | TEXT |
  | leak     | TEXT |
  | module   | TEXT |
  +-----------------+
*/

var tempCredential = {
  username: "",
  password: "",
  hash: "",
  type: "",
  leak: "",
  module: ""
};

parseCredentialsReconng = function(data){
  for(var i = 0; i < data.length; i++){
    tempCredential.username = data[i][0];
    tempCredential.password = data[i][1];
    tempCredential.hash = data[i][2];
    tempCredential.type = data[i][3];
    tempCredential.leak = data[i][4];
    tempCredential.module = data[i][5];
    testParsing();
  }
};

var testParsing = function(){
  console.log(tempCredential);
}