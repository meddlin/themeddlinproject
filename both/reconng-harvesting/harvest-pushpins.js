/*
RECON-NG SCHEMA OUTPUT
  +---------------------+
  |       pushpins      |
  +---------------------+
  | source       | TEXT |
  | screen_name  | TEXT |
  | profile_name | TEXT |
  | profile_url  | TEXT |
  | media_url    | TEXT |
  | thumb_url    | TEXT |
  | message      | TEXT |
  | latitude     | TEXT |
  | longitude    | TEXT |
  | time         | TEXT |
  | module       | TEXT |
  +---------------------+
*/

var tempPushpin = {
  screenName: "",
  profileName: "",
  profileUrl: "",
  mediaUrl: "",
  thumbUrl: "",
  message: "",
  latitude: "",
  longitude: "",
  time: "",
  module: ""
}

parsePushpinReconng = function(data){
  for(var i = 0; i < data.length; i++){
    tempPushpin.screenName = data[i][0];
    tempPushpin.profileName = data[i][1];
    tempPushpin.profileUrl = data[i][2];
    tempPushpin.mediaUrl = data[i][3];
    tempPushpin.thumbUrl = data[i][4];
    tempPushpin.message = data[i][5];
    tempPushpin.latitude = data[i][6];
    tempPushpin.longitude = data[i][7];
    tempPushpin.time = data[i][8];
    tempPushpin.module = data[i][9];
  }
};