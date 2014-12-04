
/*****************************************************************************/
/* locations: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.locations.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

});

Template.locations.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* locations: Lifecycle Hooks */
/*****************************************************************************/
Template.locations.created = function () {
};

Template.locations.rendered = function () {

  GoogleMaps.init(
    {
      'sensor': false, //optional
      'key': 'AIzaSyAspkPFzxF0fiTyca8qPD2E4a5KqSYR9Co', //optional
      'language': 'en' //optional
    },
    function(){
      console.log('google maps init');
      var mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      };
      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      map.setCenter(new google.maps.LatLng(35.363556, 138.730438));
    }
  );

};

Template.locations.destroyed = function () {
};


