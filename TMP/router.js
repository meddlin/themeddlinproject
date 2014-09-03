Router.configure({
	layoutTemplate: 'navigation'
});

Router.map( function(){
	this.route('home', {path: '/'});
	this.route('about', {path: '/about'});
	this.route('users', {path: '/users'});
	this.route('login', {path: '/login'});
})