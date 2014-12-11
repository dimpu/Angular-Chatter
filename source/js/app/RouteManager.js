(function(){
"use strict";
	define([],function(){

		var RouteManager=function($routeProvider){
			$routeProvider
			.when( '/login', {
                templateUrl : "./js/app/modules/auth/views/login.html",
                controller  : "LoginCtrl"
            })
            .when( '/register', {
                templateUrl : "./js/app/modules/auth/views/register.html",
                controller  : "RegisterCtrl"
            })
            .when( '/forget', {
                templateUrl : "./js/app/modules/auth/views/forget.html",
                controller  : "ForgetCtrl"
            })
            .when('/rooms',{
                templateUrl : "./js/app/modules/rooms/views/home.html",
                controller  : "rooms.HomeCtrl",
                resolve     : false
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