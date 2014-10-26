
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
      }
      /* XML PARSER */
      if(file.type == "text/xml"){
        Meteor.call('callPy', file, function(err, sumVar){
          console.log(sumVar);
        });
        console.log("xml parsing goes here");
        var xmlDoc = $.parseXML(file);
        $xml = $(xmlDoc);
        console.log(xmlDoc);
        console.log($xml);
        var vbLvl = $xml.find('verbose');

        console.log("attempting to find some text...");
        var xmlForJavaScript = xmlDoc;
        var nmaprunJS = xmlForJavaScript.getElementsByTagName("nmaprun");
        var scanner = nmaprunJS.getAttribute("scanner");
        console.log("JS nmaprun: " + nmaprunJS);
        console.log("JS scanner: " + scanner);

        $xml.find('nmaprun').each(function() {
          console.log("in jquery: nmaprun");
          console.log( $(this).attr('scanner') );
        });
        $xml.find('verbose').each(function() {
          console.log("in jquery: verbose");
          var verboseLevel = $(this).attr('level');
          console.log(verboseLevel);
          //console.log( $(this).attr('level') );
        });
        $xml.find('port').each(function() {
          console.log("in jquery: port");
          console.log( $(this).attr('portid') );
        });
        console.log("after jquery");
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