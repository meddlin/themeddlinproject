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

parsePushpinsReconng = function(data){
  for(var i = 0; i < data.length; i++){
    TPushpinModel.screenName = data[i][0];
    TPushpinModel.profileName = data[i][1];
    TPushpinModel.profileUrl = data[i][2];
    TPushpinModel.mediaUrl = data[i][3];
    TPushpinModel.thumbUrl = data[i][4];
    TPushpinModel.message = data[i][5];
    TPushpinModel.latitude = data[i][6];
    TPushpinModel.longitude = data[i][7];
    TPushpingModel.time = data[i][8];
    TPushpingModel.module = data[i][9];

    TPushpins.insert(TPushpinModel);
  }
};