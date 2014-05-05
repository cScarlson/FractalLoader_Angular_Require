/***/
requirejs.config({
	baseUrl: '/',
	paths: {
		app: '/app',
		js: '/js',
		lib: '/lib',
		angular: '/lib/angular/angular',
		ngroute: '/lib/angular/angular-route',
		ngresrc: '/lib/angular/angular-resource',
		controllers: '/js/controllers'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'ngresrc': {
			deps: ['angular'],
			exports: 'ngRoute'
		},
		'ngroute': {
			deps: ['angular'],
			exports: 'ngRoute'
		}
	}
});

requirejs(['angular', 'globals', 'app', 'ngroute'], function(angular, globals, initApp){
	console.log('required app.js', angular);
	angular.element(document).ready(function(){
		initApp({globals: globals});
		angular.bootstrap(document, ['app']);
	});
});