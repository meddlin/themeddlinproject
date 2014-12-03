
/*****************************************************************************/
/* upload: Event Handlers and Helpersss .js*/
/*****************************************************************************/
var timestamp = moment();
var globalFiles;

Template.upload.events({
   'click #removeAll': function(event, template){
      event.preventDefault();
      Meteor.call('removeAllFiles');
    },

   'change #fileInput': function (event, template) {
      event.preventDefault();
      globalFiles = event.target.files;
   },

   'click #upload-button': function(event, template){
    event.preventDefault();
    if(globalFiles == undefined){
      toastr.error("Choose a file first.", "Error!");
    }

    for (var i = 0, ln = globalFiles.length; i < ln; i++) {
      if (globalFiles[i].type == "text/csv"){
        csvHandoff(globalFiles[i]);  //csv handling
        var insertId = MimeUpload.insert(globalFiles[i], this.userId);
        toastr.success(globalFiles[i].name, "Uploaded");

      }else if(globalFiles[i].type == "text/xml"){
        xmlHandoff(globalFiles[i]);  //xml handling
        var insertId = MimeUpload.insert(globalFiles[i], this.userId);
        toastr.success(globalFiles[i].name, "Uploaded");

      }else if(globalFiles[i].type == "text/html"){
        //html handling
        toastr.info("Parsing issue: HTML parsing not implemented." + globalFiles[i].name + " skipped!");

      }else{
        //wrong file type, skip it
        toastr.error("Wrong file type." + globalFiles[i].name + " skipped!", "UPLOAD ERROR");
      }
    }
    $("form")[0].reset();
  }

});

Template.upload.helpers({
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
/* upload: Lifecycle Hooks */
/*****************************************************************************/
Template.upload.created = function () {
};

Template.upload.rendered = function () {
  $('#select-reconng-info').dropdown();
};

Template.upload.destroyed = function () {
};


/*****************************************************************************/
/* upload: Helper parser methods */
/*****************************************************************************/
var csvHandoff = function(file){
  console.log("csv parsing goes here");
  Papa.parse(file, {
    complete: function(results){
      var dropText = $('#select-reconng-info :selected').text();
      console.log("dropText: ");
      console.log(dropText);

      /* RECON-NG PARSING */
      if(dropText == "Companies"){
        parseCompaniesReconng(results.data);
      }else if(dropText == "Contacts"){
        parseContactsReconng(results.data);
      }else if(dropText == "Credentials"){
        parseCredentialsReconng(results.data);
      }else if(dropText == "Domains"){
        parseDomainsReconng(results.data);
      }else if(dropText == "Hosts"){
        parseHostsReconng(results.data);
      }else if(dropText == "Leaks"){
        parseLeaksReconng(results.data);
      }else if(dropText == "Locations"){
        parseLocationsReconng(results.data);
      }else if(dropText == "Netblocks"){
        parseNetblocksReconng(results.data);
      }else if(dropText == "Ports"){
        parsePortsReconng(reuslts.data);
      }else if(dropText == "Pushpins"){
        parsePushpinsReconng(results.data);
      }else if(dropText == "Vulnerabilities"){
        parseVulnerabilitiesReconng(results.data);
      }
    }
  });
};

var xmlHandoff = function(file){
  var fileReader = new FileReader(); //used for reading DOM File objects into strings
  // since readAsText() is an asynchronous method, there needs to be a listener this event listener is called once the file has finished loading 
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
};





///**** OLD CODE ****///

/*FS.Utility.eachFile(event, function(file) {
      console.log("file name: " + file.name + "file type: " + file.type + "file size: " + file.size + " bytes | " + (file.size / 1024) + "KB | " + (file.size / (1024*1024)) + "MB");
      var user = this.userId;

      if(file.type == "text/csv"){

        csvHandoff(file);

      }else if(file.type == "text/xml"){
        var fileReader = new FileReader(); //used for reading DOM File objects into strings
        // since readAsText() is an asynchronous method, there needs to be a listener this event listener is called once the file has finished loading 
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

      }else if(file.type == "text/html"){

      }

      var insertId = MimeUpload.insert(file, this.userId);

    });*/

//END: OLD CODE//
