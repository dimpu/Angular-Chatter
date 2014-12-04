


(function ( define, angular ){

	define([
    "modules/app/services/dataFactory",
		'modules/auth/controller/loginCtrl',
		'modules/auth/controller/registerCtrl',
		'modules/auth/controller/forgetCtrl',
		
		],
		function(dataFactory,loginCtrl,registerCtrl,forgetCtrl){
			var moduleName = "Auth";
		  	angular.module( moduleName, [ ] )
          .factory('dataFactory', dataFactory)
          .controller( "loginCtrl",  loginCtrl)
          .controller( "registerCtrl",registerCtrl)
          .controller( "forgetCtrl",forgetCtrl);
            // .directive('videoBg',videoBgDirective);

            // .factory('bgVideoFactory',bgVideoFactory);

            return moduleName;
		});

}(define,angular));