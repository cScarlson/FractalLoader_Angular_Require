/***/
define([], function(){
	console.log('app.js');
	return function protagonist(sandbox){
		console.log('@Globals', sandbox);
		var globals = sandbox.globals, Fetch = globals.Fetch;
		var app = angular.module('app', ['ngRoute']);
		
		
		
		app.config(function($routeProvider, $controllerProvider){
			/*
			var IndexModule = new Fetch();
			var IndexResolver = IndexModule(require).at('controllers/index').pass({app: app}).use($controllerProvider.register);
			var OtherModule = new Fetch();
			var OtherResolver = OtherModule(require).at('controllers/other').pass({app: app}).use($controllerProvider.register);
			*/
			
			$routeProvider
				.when('/', {
					templateUrl: '/tmpl/index.html',
					controller: 'IndexCtrl',
					resolve: (new Fetch())(require).at('controllers/index').pass({app: app}).use($controllerProvider.register)
				})
				.when('/index', { redirectTo: '/' })
				.when('/other', {
					templateUrl: '/tmpl/index.html',
					controller: 'OtherCtrl',
					resolve: (new Fetch())(require).at('controllers/other').pass({app: app}).use($controllerProvider.register)
				})
				.otherwise({
					templateUrl: '/tmpl/index.html',
					controller: function($scope){
						$scope.title = '404';
					}
				});
		});
	};
});

/*
app.config(function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
    {
        app.controllerProvider = $controllerProvider;
        app.compileProvider    = $compileProvider;
        app.routeProvider      = $routeProvider;
        app.filterProvider     = $filterProvider;
        app.provide            = $provide;
 
        // Register routes with the $routeProvider
        $routeProvider.when('/', {templateUrl:'views/home.html'});
        $routeProvider.when('/about', {templateUrl:'views/about.html', resolve:{deps:function($q, $rootScope)
        {
            var deferred = $q.defer();
            var dependencies =
            [
                'controllers/AboutViewController.js',
                'directives/some-directive.js'
            ];
 
            $script(dependencies, function()
            {
                // all dependencies have now been loaded by $script.js so resolve the promise
                $rootScope.$apply(function()
                {
                    deferred.resolve();
                });
            });
 
            return deferred.promise;
        }}});
    });
	
	*/