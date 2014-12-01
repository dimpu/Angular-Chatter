


(function ( define, angular ){

	define([
		'modules/auth/controller/loginCtrl'
		],
		function(loginCtrl){
			var moduleName = "Auth";
		  	angular.module( moduleName, [ ] )
            .controller( "loginCtrl",  loginCtrl);

            return moduleName;
		});

}(define,angular));