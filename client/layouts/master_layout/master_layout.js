
/*****************************************************************************/
/* masterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
  // $('#opener').on('click', function() {
  //   var panel = $('#slide-panel');
  //   if (panel.hasClass("invisible")) {
  //     panel.removeClass('invisible').animate({'margin-right':'-300px'});
  //   } else {
  //     panel.addClass('invisible').animate({'margin-right':'0px'});
  //   }
  //   return false;
  // });

  Template.masterLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

   /*
   'click #opener': function(event){
      event.preventDefault();
      var panel = $('#slide-panel');
      if (panel.hasClass("invisible")) {
        panel.removeClass('invisible').animate({'margin-right':'-300px'});
      } else {
        panel.addClass('invisible').animate({'margin-right':'0px'});
      }
      return false;
    },
    */

   'click #opener': function(event){
      event.preventDefault();
      $('#chatBox').toggle(drop, {}, 500);
      //return false;
    },

    'click #leftSideBarTrigger': function(event){
      event.preventDefault();
        $('#leftSideBarTrigger').sidebar('toggle');
    },


   'keydown input#send' : function (event){
      if (event.which == 13){
        //var user = Meteor.user();
        var name = Meteor.user().emails[0].address;
        var message = document.getElementById('send');
        var currentTime = new Date().toTimeString();
        console.log("name: " + name + " | message: " + message.value + " | currTime: " + currentTime);
        if (message.value != ''){
          Chat.insert({owner: name, ownerEmail: Meteor.user().emails[0].address, message: message.value, createdAt: currentTime});
          document.getElementById('send').value = '';
          message.value = '';
          var chatBox = document.getElementById('chat-message');
          chatBox.scrollTop = chatBox.scrollHeight;
        }
      }
   } //end keydown input#send

});

Template.chatBox.messages = function(){
  /*var items = Chat.find({}, {sort: {time: 1}}).fetch();
  return items.slice(-15);*/
  return Chat.find();
};

Template.masterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* masterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.masterLayout.created = function () {
  return Meteor.subscribe('chat');
};

Template.masterLayout.rendered = function () {
  $('.ui.thin.sidebar').sidebar();
};

Template.masterLayout.destroyed = function () {
};

