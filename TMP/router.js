Router.configure({
	layoutTemplate: 'navigation'
});

Router.map( function(){
	this.route('home', {path: '/'});
	this.route('login', {path: '/login'});
	this.route('users', {path: '/users'});
	this.route('about', {path: '/about'});
})