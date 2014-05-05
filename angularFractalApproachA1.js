
/*

(function()
{
    var app = angular.module('app', []);
 
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
})();

// This file will be loaded from index.html
$script(['appModule.js'], function()
{
    angular.bootstrap(document, ['app'])
});

*/