//Set Cache Control headers so we don't overload our meteor server with http requests
FS.HTTP.setHeadersForGet([
    ['Cache-Control', 'public, max-age=31536000']
    ]);

//Create the master store
masterStore = new FS.Store.GridFS("master");

//Create a thumbnail store
thumbnailStore = new FS.Store.GridFS("thumbnail", {
    //Create the thumbnail as we save to the store.
    /*transformWrite: function(fileObj, readStream, writeStream) {
         Use graphicsmagick to create a 300x300 square thumbnail at 100% quality,
        * orient according to EXIF data if necessary and then save by piping to the 
        * provided writeStream 
        gm(readStream, fileObj.name).resize(300,300,"^")
        .gravity('Center').crop(300, 300).quality(100).autoOrient().stream().pipe(writeStream);
    }*/
});