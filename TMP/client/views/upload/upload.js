
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
        var fileReader = new FileReader();

        /* since readAsText() is an asynchronous method, there needs to be a listener
            this event listener is called once the file has finished loading
         */
        fileReader.onload = function(e){
          var xmlText = fileReader.result;
          //console.log("xmlText: " + xmlText);
          //parseTheXmlFile(xmlText); //parsing with jQuery
          Meteor.call('parseXML', xmlText, function(err, parsedXml) {
            console.log("parsedXml");
            console.log("px: " + parsedXml);
            console.log("takeupspace");
          });

          //Meteor method call
          /*Meteor.call('callPy', xmlText, function(err, sumVar){
            console.log(sumVar);
          });*/
        }
        fileReader.readAsText(file);
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

parseTheXmlFile = function(xmlText){
  var xmlDoc = $.parseXML(xmlText);
  $xml = $(xmlDoc);
  //console.log("nmaprun: " + console.log($xml.find('nmaprun') ));
  var services = $xml.find('scaninfo').attr('services');
  var verboseLevel = $xml.find('verbose').attr('level');
  var numservices = $xml.find('scaninfo').attr('numservices');
  console.log("verboseLevel: " + verboseLevel);
  console.log("numservices: " + numservices);
  console.log("services: " + services);
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