(function(){

	define([],function(){

		var RouteManager=function($routeProvider){
			$routeProvider
			.when( '/login', {
                templateUrl : "./js/app/modules/auth/views/login.html",
                controller  : "loginCtrl"
            })
            .when( '/register', {
                templateUrl : "./js/app/modules/auth/views/register.html",
                controller  : "registerCtrl"
            })
            .when( '/forget', {
                templateUrl : "./js/app/modules/auth/views/forget.html",
                controller  : "forgetCtrl"
            })
            .when( '/forget', {
                templateUrl : "./js/app/modules/auth/views/forget.html",
                controller  : "forgetCtrl"
            })
            .otherwise({
                redirectTo  : '/login'
            });
		};
		RouteManager.$inject=["$routeProvider"];

		return RouteManager;
	});


}(define));