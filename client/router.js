Router.onBeforeAction('loading');

Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "",
	notFoundTemplate: "notfound",
	loadingTemplate: "loading"
});


Router.map(function () {
	/* this.route("/", {name: "publicHome", title: "Home"}); */
	this.route("/test", {name: "test", title: "Test", layoutTemplate: 'publicHeader'});
  /*this.route("/messages", {name: "messages", title: "Messages"});*/
	this.route("/login", {name: "login", title: "Login"});
  this.route("/register", {name: "register", title: "Register"});
  //this.route("/addnew", {name: "addnew", title: "Add New"});
  this.route("/forgot", {name: "forgot", title: "Forgot"});
  this.route("/groups", {name: "groups", title: "Groups"});
  this.route("/maps", {name: "maps", title: "Maps"});
  this.route("/newitem", {name: "newitem", title: "New Item"});
  this.route("/news", {name: "news", title: "News"});
  this.route("/settings", {name: "settings", title: "Settings"});
  this.route("/terms", {name: "terms", title: "Terms"});
  this.route("/todo", {name: "todo", title: "Todo"});

});

Router.route('user', {
  template: 'user',
  path: '/user',
  title: 'My Account'
});

Router.route('/post/:_id', function () {
  this.render('Post', {
    data: function () {
      return Posts.findOne({_id: this.params._id});
    }
  });
});


Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'publicHome',
    layoutTemplate: 'ApplicationLayout', // This and the following two can also be defined
    loadingTemplate: 'loading', // in Router.configure like your code does
    notFoundTemplate: 'notFound',
    yieldTemplates: {
      'publicHeader': {to: 'header'}, // You need to define the other templates
      'menubar': {to: 'footer'}, // that will be sent into other yields
			'sidebar': {to: 'aside'} // that will be sent into other yields
    },
    waitOn: function () {
      return Meteor.subscribe('baz');
    },
    data: function () {
      return Baz.find();
    }
  });
});
/*
Router.map(function () {
  this.route('messages', {
    path: '/messages',
    template: 'messages',
    layoutTemplate: 'messages', // This and the following two can also be defined
    loadingTemplate: 'loading', // in Router.configure like your code does
    notFoundTemplate: 'notFound',
    yieldTemplates: {
      'publicHeader': {to: 'header'}, // You need to define the other templates
      'menubar': {to: 'footer'}, // that will be sent into other yields
			'sidebar': {to: 'aside'}, // that will be sent into other yields
			'layout': {to: 'messagesLayout'} // that will be sent into other yields
    },
    waitOn: function () {
      return Meteor.subscribe('baz');
    },
    data: function () {
      return Baz.find();
    }
  });
});
*/



Router.map(function () {
  this.route('messages', {
    path: '/messages',
    template: 'bar',
    layoutTemplate: 'messages',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    yieldTemplates: {
      'header': {to: 'header'},
      'menubar': {to: 'footer'},
			'sidemenu': {to: 'aside'}, // that will be sent into other yields
      'messageContent': {to: 'body'}
    },
    waitOn: function () {
      return Meteor.subscribe('baz');
    },
    data: function () {
      return Baz.find();
    }
  });
});
