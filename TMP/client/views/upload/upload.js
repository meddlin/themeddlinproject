
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
    var fileReader = new FileReader(); //used for reading DOM File objects into strings

    FS.Utility.eachFile(event, function(file) {
      console.log("file name: " + file.name);
      console.log("file type: " + file.type);
      console.log("file size: " + file.size + " bytes | " + (file.size / 1024) + "KB | " + (file.size / (1024*1024)) + "MB");
      console.log(file.type + " insert");
      MimeUpload.insert(file);

      /* CSV PARSER */
      if(file.type == "text/csv"){
        console.log("csv parsing goes here");
        Papa.parse(file, {
          complete: function(results){
            console.log("Stringify the results...");
            console.log("results: " + console.log(results));

            var fileData = results.data;
            for (var i = 0; i < fileData.length; i++){
              for (var j = 0; j < fileData[i].length; j++){
                console.log(fileData[i][j]);
              }
            }
          }
        });
      }
      /* XML PARSER */
      if(file.type == "text/xml"){
        /* since readAsText() is an asynchronous method, there needs to be a listener
            this event listener is called once the file has finished loading
         */
        fileReader.onload = function(e){
          var xmlText = fileReader.result;
          Meteor.call('parseXML', xmlText, function(err, parsedXml) {
            console.log("parsedXml");
            console.log("px: " + parsedXml);
            console.log("takeupspace");
          });
        }
        fileReader.readAsText(file);
      }

      /* HTML PARSER */
      if(file.type == "text/html"){

      }

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