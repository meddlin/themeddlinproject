/* "Pirates ye be warned"

"Take what ya can! Give nothing back!"
*/

Template.hello.greeting = function () {
  return "Welcome to TMP.";
};

Template.hello.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});