


(function ( define, angular ){

	define([
		'modules/auth/controller/loginCtrl',
		'modules/auth/controller/registerCtrl',
		'modules/auth/controller/forgetCtrl',
		
		],
		function(loginCtrl,registerCtrl,forgetCtrl){
			var moduleName = "Auth";
		  	angular.module( moduleName, [ ] )
            .controller( "loginCtrl",  loginCtrl)
            .controller( "registerCtrl",registerCtrl)
            .controller( "forgetCtrl",forgetCtrl);
            // .directive('videoBg',videoBgDirective);

            // .factory('bgVideoFactory',bgVideoFactory);

            return moduleName;
		});

}(define,angular));