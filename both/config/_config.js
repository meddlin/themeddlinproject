this.Config = {
  name: 'The Meddlin Project',
  title: '',
  subtitle: 'Hack the planet!',
  logo: function() {
    return this.name;
  },
  footer: function() {
    return this.name + ' - Copyright ' + new Date().getFullYear();
  },
  emails: {
    from: 'noreply@' + Meteor.absoluteUrl()
  },
  blog: 'http://sourcefuge.com/tmproj',
  about: 'http://benjaminpeterjones.com',
  username: false,
  homeRoute: '/dashboard',
  socialMedia: [['http://facebook.com/benjaminpeterjones', 'facebook'], ['http://twitter.com/BenPeterJones', 'twitter'], ['http://github.com/yogiben', 'github']]
};