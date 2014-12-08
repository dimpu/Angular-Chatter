
//modules/rooms/rooms.js

(function (define){

	define([
		"modules/rooms/controllers/HomeCtrl",
    "modules/rooms/controllers/MenuCtrl",
    "modules/rooms/controllers/CreateCtrl",
    "modules/rooms/controllers/ChatCtrl",
    "modules/rooms/directives/uniqueRommDirective"

		],function(HomeCtrl,MenuCtrl,CreateCtrl,ChatCtrl,uniqueRommDirective){

    var ModuleName="Rooms";
		  angular.module( ModuleName, [] )
		  .controller("rooms.HomeCtrl",HomeCtrl)
      .controller("rooms.CreateCtrl",CreateCtrl)
      .controller("rooms.ChatCtrl",ChatCtrl)
      .directive("uniqueroom",uniqueRommDirective);
      // .controller("rooms.MenuCtrl",MenuCtrl)
      // .controller("rooms.CreateCtrl",CreateCtrl);
		 return ModuleName;
	});
  
}(define));