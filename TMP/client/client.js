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

Template.login.events({
	'submit #login-form': function(e, t){
		e.preventDefault();

		//retrieve the input field values
		var email = t.find('#login-email').value;
		email = trimInput(email);
		var password = t.find('#login-password').value;
		var passes = false;

		//should probably trim and validate the fields
		if (email !== null){
			passes = true;
		}

		//if validation passes, supply the appropriate fields to the
			//Meteor.loginWithPassword() function.
		Meteor.loginWithPassword(email, password, function(err){
			if (err)
				//the user might not have been found
					//or their password could be wrong
					//inform of login failure
					alert('login fail');
			else
				//successful login!
				return false;
		});
		return false;
	}
});

/* Trim user-input for whitespace */
  var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
  }