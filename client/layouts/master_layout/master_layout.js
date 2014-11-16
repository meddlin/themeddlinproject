
/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
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

  Template.MasterLayout.events({
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


   'keydown input#send' : function (event){
      if (event.which == 13){
        //var user = Meteor.user();
        var name = Meteor.userId();
        var message = document.getElementById('send');
        var currentTime = new Date().toTimeString();
        console.log("name: " + name + " | message: " + message.value + " | currTime: " + currentTime);
        if (message.value != ''){
          Chat.insert({user: name, message: message.value, time: currentTime});
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

Template.MasterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
  return Meteor.subscribe('chat');
};

Template.MasterLayout.rendered = function () {
};

Template.MasterLayout.destroyed = function () {
};

