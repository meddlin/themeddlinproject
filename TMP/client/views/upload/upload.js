
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

      /* HTML PARSER */
      if(file.type == "text/csv"){
        console.log("csv parsing goes here");
        Meteor.call('reconngCsvParse', file);
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
        /*Papa.parse(file, {
          complete: function(results) {
            header: true,
            console.log("results: " + console.log(results));
            var fileData = results.data; //it's an array of arrays, so Array [ arr[m], arr[n]]
            console.log(fileData[0]);
            console.log(fileData[1]);
            console.log("fileData[0].length: " + fileData[0].length);
            for (var i = 0; i < fileData[0].length; i++){
              var el = fileData[0][i];
              console.log("i: " + i + " | el: " + el);
            }
          }
        });*/
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