
/*****************************************************************************/
/* Upload: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Upload.events({
   'click #removeAll': function(event){
      event.preventDefault();
      Meteor.call('removeAllFiles');
    },

   'change #fileInput': function (event) {
    event.preventDefault();
    FS.Utility.eachFile(event, function(file) {
      console.log("file name: " + file.name)
      console.log("file type: " + file.type)
      console.log("file size: " + file.size + " bytes | " + (file.size / 1024) + "KB | " + (file.size / (1024*1024)) + "MB")
      console.log(file.type + " insert");
      MimeUpload.insert(file);
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
  return MimeUpload.find();
};

/*****************************************************************************/
/* Upload: Lifecycle Hooks */
/*****************************************************************************/
Template.Upload.created = function () {
};

Template.Upload.rendered = function () {
};

Template.Upload.destroyed = function () {
};