/**
 */
define([], function(){
	return function protagonist(sandbox){
		var app = sandbox.app;
		
		function IndexCtrl($scope){
			$scope.title = 'Index Page!!!!';
		}
		
		return {
			IndexCtrl: IndexCtrl
		};
	};
});