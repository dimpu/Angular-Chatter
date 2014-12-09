


(function ( define, angular ){
"use strict";
	define([
      "modules/app/services/dataFactory",
      "modules/auth/directives/uniqueUserDirective",
      "modules/auth/directives/uniqueEmailDirective",
		  'modules/auth/controller/loginCtrl',
		  'modules/auth/controller/registerCtrl',
		  'modules/auth/controller/forgetCtrl',
		],
    
		function(dataFactory,uniqueUserDirective,uniqueEmailDirective,loginCtrl,registerCtrl,forgetCtrl){
			var moduleName = "Auth";
		  angular.module( moduleName, ['ngCookies'] )
          .factory( 'dataFactory', dataFactory)
          .directive( 'uniqueuser',uniqueUserDirective )
          .directive( 'uniquemail',uniqueEmailDirective )
          .controller( "loginCtrl",  loginCtrl)
          .controller( "registerCtrl",registerCtrl)
          .controller( "forgetCtrl",forgetCtrl);

            return moduleName;
		});

}(define,angular));