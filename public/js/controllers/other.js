/**
 */
define([], function(){
	return function protagonist(sandbox){
		var app = sandbox.app;
		
		function OtherCtrl($scope){
			$scope.title = 'Other Page!!!!';
		}
		
		return {
			OtherCtrl: OtherCtrl
		};
	};
});