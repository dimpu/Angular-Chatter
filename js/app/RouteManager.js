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
            .when('/dashboard',{
                templateUrl : "./js/app/modules/bashboard/views/home.html",
                controller  : "dashboard.homeCtrl"
            })
            .when('/rooms',{
                templateUrl : "./js/app/modules/rooms/views/home.html",
                controller  : "rooms.HomeCtrl"
            })
            .when('/rooms/create',{
                templateUrl : "./js/app/modules/rooms/views/create.html",
                controller  : "rooms.CreateCtrl"
            })
            .when('/room/:RoomId',{
              templateUrl : "./js/app/modules/rooms/views/chat.html",
              controller  : "rooms.ChatCtrl"
            })
            .otherwise({
                redirectTo  : '/login'
            });
		};
		RouteManager.$inject=["$routeProvider"];

		return RouteManager;
	});


}(define));