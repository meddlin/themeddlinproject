Accounts.config({
  sendVerificationEmail: false
});
if (Meteor.isClient) {
  Meteor.startup(function() {
    if (Config.username) {
      return AccountsEntry.config({
        homeRoute: '/',
        dashboardRoute: '/dashboard',
        profileRoute: 'profile',
        passwordSignupFields: 'USERNAME_AND_EMAIL'
      });
    } else {
      return AccountsEntry.config({
        homeRoute: '/',
        dashboardRoute: '/dashboard',
        profileRoute: 'profile',
        passwordSignupFields: 'EMAIL_ONLY'
      });
    }
  });
}
if (Meteor.isServer) {
  Accounts.emailTemplates.siteName = Config.siteName;
  Accounts.emailTemplates.from = Config.fromEmail;
}