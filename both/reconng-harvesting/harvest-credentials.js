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
  passHash: "",
  type: "",
  leak: "",
  module: ""
};

parseCredentialsReconng = function(data){
  for(var i = 0; i < data.length; i++){
    TUserModel.username = data[i][0];
    TUserModel.password = data[i][1];
    TUserModel.passHash = data[i][2];
    TUserModel.type = data[i][3];
    TUserModel.leak = data[i][4];
    TUserModel.module = data[i][5];

    TUsers.insert(TUserModel);
    /*testParsing();*/
  }
};

var testParsing = function(){
  console.log(tempCredential);
}