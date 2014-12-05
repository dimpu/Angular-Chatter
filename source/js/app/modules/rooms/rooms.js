

(function (define){

	define([
		"modules/rooms/controllers/home.js"
		],function(homeCtrl){
		var ModuleName="Rooms";
		 angular.module( moduleName, [ ] )
		 .controller("rooms.homeCtrl",homeCtrl);


		 return ModuleName;


	});
}(define));