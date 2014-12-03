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
    tempContact.fname = data[i][0];
    tempContact.mname = data[i][1];
    tempContact.lname = data[i][2];
    tempContact.email = data[i][3];
    tempContact.title = data[i][4];
    tempContact.region = data[i][5];
    tempContact.country = data[i][6];
    tempContact.module = data[i][7];
    testParsing();
  }

};

var testParsing = function(){
  console.log(tempContact);
}

