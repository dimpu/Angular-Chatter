

(function (define){

	define([],function(){

		var CreateCtrl=function($scope,$cookieStore,$location,dataFactory){
     var loader = Ladda.create(document.getElementById("form-room-crete-btn"));
      // $scope.isPublic=true;
      $scope.createRoom=function(room){
        room['CreatorId']=$cookieStore.get("LoggedInUserId");
         loader.start();
         console.log(room);
        dataFactory.create("rooms",room)
        .success(function(data){
          console.log(data);
          loader.stop();
          $location.path('/rooms');
        });
      }
		};

		CreateCtrl.$inject=['$scope','$cookieStore','$location','dataFactory'];

		return CreateCtrl;

	});

}(define));