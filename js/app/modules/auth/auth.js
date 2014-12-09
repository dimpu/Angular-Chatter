


(function ( define, angular ){
"use strict";
	define([
      "modules/app/services/dataFactory",
      "modules/auth/directives/uniqueUserDirective",
      "modules/auth/directives/uniqueEmailDirective",
		  'modules/auth/controller/LoginCtrl',
		  'modules/auth/controller/RegisterCtrl',
		  'modules/auth/controller/ForgetCtrl',
      'modules/auth/services/AuthService'
		],
    
		function(dataFactory,uniqueUserDirective,uniqueEmailDirective,LoginCtrl,RegisterCtrl,ForgetCtrl,AuthService){
			var moduleName = "Auth";
		  angular.module( moduleName, ['ngCookies'] )
          .factory('dataFactory', dataFactory)
          .factory('AuthService', AuthService)
          .directive('uniqueuser', uniqueUserDirective )
          .directive('uniquemail', uniqueEmailDirective )
          .controller("LoginCtrl", LoginCtrl)
          .controller("RegisterCtrl",RegisterCtrl)
          .controller("ForgetCtrl",ForgetCtrl);
          return moduleName;
		});

}(define,angular));