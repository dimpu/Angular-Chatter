
(function ( define ){

	define([
		"modules/dashboard/controller/homeCtrl"
		],function(homeCtrl){

		var moduleName="chatter.dashboard";

		angular.module(moduleName,[])
		.controller("dashboard.homeCtrl",homeCtrl);


		return moduleName;

	});

}(define));