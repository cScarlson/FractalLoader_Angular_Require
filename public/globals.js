/**
 */
define(function(){
	var Fetch = (function(Schema){
		return function Omnifarious(){
			var Loader, Path, Payload, Registrar;
			var Main = function f(loader){
				Loader = loader;
				return f;
			};
			
			function At(path){
				Path = path;
				return this;
			}
			
			function Pass(payload){
				Payload = payload;
				return this;
			}
			
			function Use(registrar){
				Registrar = registrar;
				return {
					fractalLoader: function($rootScope, $q){
						var deferred = $q.defer();
						Loader([Path], function(initModuleObject){
							var moduleObject = null;
							if(Payload){
								moduleObject = initModuleObject(Payload);
							}
							Registrar(moduleObject);
							$rootScope.$apply(function(){
								deferred.resolve();
							});
						});
						return deferred.promise;
					}
				};
			}
			
			Schema.prototype = {
				at: At,
				pass: Pass,
				use: Use
			};
			Main.__proto__ = Object.getPrototypeOf(new Schema());
			
			return Main;
		};
	})(function schema(){});
	
	return {
		prop: 'attr',
		Fetch: Fetch
	};
});