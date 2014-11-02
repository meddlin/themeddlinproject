var timestamp = moment();

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
      console.log("file name: " + file.name + "file type: " + file.type + "file size: " + file.size + " bytes | " + (file.size / 1024) + "KB | " + (file.size / (1024*1024)) + "MB");
      var insertId = MimeUpload.insert(file, this.userId);
      var user = this.userId;

      if(file.type == "text/csv"){ /* CSV PARSER */
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
      }else if(file.type == "text/xml"){ /* XML PARSER */
        /* since readAsText() is an asynchronous method, there needs to be a listener this event listener is called once the file has finished loading */
        fileReader.onload = function(e){
          var xmlText = fileReader.result;
          Meteor.call('storeXML', xmlText, function(err, parsedXml) {
            if(err){
              console.log("storeXML ERROR");
            }else{
              console.log("storeXML SUCCESS");
            }
          });
        }
        fileReader.readAsText(file);
      }else if(file.type == "text/html"){ /* HTML PARSER */
        //stuff goes here
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