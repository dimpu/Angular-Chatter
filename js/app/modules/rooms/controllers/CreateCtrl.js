

(function (define){
"use strict";
	define([],function(){

		var CreateCtrl=function($scope,$cookieStore,$location,dataFactory){
     var loader = Ladda.create(document.getElementById("form-room-crete-btn"));
      // $scope.isPublic=true;
      $scope.createRoom=function(room){
        room['CreatorId']=$cookieStore.get("LoggedInUserId");
         loader.start();
        dataFactory.create("rooms",room)
        .success(function(data){
          loader.stop();
          $location.path('/rooms');
        });
      }
		};

		CreateCtrl.$inject=['$scope','$cookieStore','$location','dataFactory'];

		return CreateCtrl;

	});

}(define));