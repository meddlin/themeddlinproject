
/*****************************************************************************/
/* Upload: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Upload.events({
   'click #removeAll': function(){
      Meteor.call('removeAllFiles');
    },

   'change #fileInput': function (event) {
    FS.Utility.eachFile(event, function(file) {
      console.log("file name: " + file.name)
      console.log("file type: " + file.type)
      console.log("file size: " + file.size + " bytes | " + (file.size / 1024) + "KB | " + (file.size / (1024*1024)) + "MB")
      if(file.type.startsWith("application/")){
        console.log("mime-application insert")
        MimeApplication.insert(file);
      }else{
        console.log("TYPE ERROR");  
      }

      /*switch(file.type){
        case file.type.startsWith("application"):
          console.log("mime-application insert");
          MimeApplication.insert(file);
          break;
        case file.type.startsWith("audio/"):
          console.log("mime-audio insert");
          MimeAudio.insert(file);
          break;
        case file.type.startsWith("chemical/"):
          console.log("mime-chemical insert");
          MimeChemical.insert(file);
          break;
        case file.type.startsWith("image/"):
          console.log("mime-image insert");
          MimeImage.insert(file);
          break;
        case file.type.startsWith("inode/"):
          console.log("mime-inode insert");
          MimeInode.insert(file);
          break;
        case file.type.startsWith("message/"):
          console.log("mime-message insert");
          MimeMessage.insert(file);
          break;
        case file.type.startsWith("model/"):
          console.log("mime-model insert");
          MimeModel.insert(file);
          break;
        case file.type.startsWith("multipart/"):
          console.log("mime-multipart insert");
          MimeMultipart.insert(file);
          break;
        case file.type.startsWith("text/"):
          console.log("mime-text insert");
          MimeText.insert(file);
          break;
        case file.type.startsWith("video/"):
          console.log("mime-video insert");
          MimeVideo.insert(file);
          break;
        case file.type.startsWith("x-conference/"):
          console.log("mime-xconference insert");
          MimeXconference.insert(file);
          break;
        case file.type.startsWith("x-epoc/"):
          console.log("mime-xepoc");
          MimeXepoc.insert(file);
          break;
        case file.type.startsWith("x-world/"):
          console.log("mime-xworld insert");
          MimeXworld.insert(file);
          break;
        //default:
          //console.log('TYPE ERROR');
      }*/
      
    });
    $("form")[0].reset();
  }


});

Template.Upload.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

Template.files.files = function() {
  return MimeApplication.find();/*[MimeApplication.find(),
  MimeAudio.find(),
  MimeChemical.find(),
  MimeImage.find(),
  MimeInode.find(),
  MimeMessage.find(),
  MimeModel.find(),
  MimeMultipart.find(),
  MimeText.find(),
  MimeVideo.find(),
  MimeXconference.find(),
  MimeXepoc.find(),
  MimeXworld.find()];*/
};

/*****************************************************************************/
/* Upload: Lifecycle Hooks */
/*****************************************************************************/
Template.Upload.created = function () {
  
  $('#example').dataTable({"sPaginationType": "bs_full"});
};

Template.Upload.rendered = function () {
};

Template.Upload.destroyed = function () {
};

