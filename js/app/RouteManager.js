(function(){

	define([],function(){

		var RouteManager=function($routeProvider){
			$routeProvider
			.when( '/login', {
                templateUrl : "./js/app/modules/auth/views/login.html",
                controller  : "loginCtrl"
            })
            .otherwise({
                redirectTo  : '/login'
            });
		};
		RouteManager.$inject=["$routeProvider"];

		return RouteManager;
	});


}(define));