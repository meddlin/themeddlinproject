/*
RECON-NG SCHEMA OUTPUT
  +--------------------+
  |      contacts      |
  +--------------------+
  | first_name  | TEXT |
  | middle_name | TEXT |
  | last_name   | TEXT |
  | email       | TEXT |
  | title       | TEXT |
  | region      | TEXT |
  | country     | TEXT |
  | module      | TEXT |
  +--------------------+
*/
var tempContact = {
  fname: "",
  mname: "",
  lname: "",
  email: "",
  title: "",
  region: "",
  country: "",
  module: ""
};

parseContactsReconng = function(data) {
  console.log("in harvest-contacts.js");
  for (var i = 0; i < data.length; i++){
    TUserModel.fname = data[i][0];
    TUserModel.mname = data[i][1];
    TUserModel.lname = data[i][2];
    TUserModel.email = data[i][3];
    TUserModel.title = data[i][4];
    TUserModel.region = data[i][5];
    TUserModel.country = data[i][6];
    TUserModel.module = data[i][7];

    TUsers.insert(TUserModel);
    /*testParsing();*/
  }

};

var testParsing = function(){
  console.log(tempContact);
}

