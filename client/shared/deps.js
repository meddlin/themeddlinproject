Deps.autorun(function() {

	if (Session.get('language')) {
	  Session.set('Language', Languages[Session.get('language')]);
	} else {
	  Session.set('Language', null);
	}

	if (Meteor.user()) {
	  Session.set('learning', Meteor.user().learning);
	}
	if (Session.get('learning')) {
	  Session.set('Learning', _.map(Session.get('learning'), function(string) {
	    return Languages[string];
	  }));
	}
	if (Meteor.userId() && !_.isNull(Router.current()) && Router.current().route.name === 'entrySignIn') {
	  Router.go('dashboard');
	}
	if (Meteor.userId() && !_.isNull(Router.current()) && Router.current().route.name === 'entrySignUp') {
	  Router.go('dashboard');
	}

});