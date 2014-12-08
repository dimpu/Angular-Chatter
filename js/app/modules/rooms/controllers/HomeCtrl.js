

//modules/rooms/controllers/HomeCtrl

(function (define){

	define(["modules/app/services/dataFactory"],function(){
		var roomHomeCtrl=function($scope,$cookieStore,$location,dataFactory){
			$scope.rooms=[];
      $scope.IsLoading=true;
      $scope.RoomsNotAvilable=false;
        var getCondition ={
          $or: [ 
            { CreatorId:$cookieStore.get("LoggedInUserId") }, 
            { IsPublic: true } 
          ]
        };
			dataFactory.query("rooms",getCondition)
      .success(function(data){
        $scope.rooms=data;
        $scope.IsLoading=false;
        if(data.length > 0){
          $scope.RoomsNotAvilable=false;
        }else{
           $scope.RoomsNotAvilable=true;
        }
      });

		};
		roomHomeCtrl.$inject=['$scope','$cookieStore','$location','dataFactory'];

		return roomHomeCtrl;


	});

}(define));