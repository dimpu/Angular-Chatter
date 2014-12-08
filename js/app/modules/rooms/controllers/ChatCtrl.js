


(function (define){
	define([],function(){
		var ChatCtrl =function($scope,$cookieStore,$location,$routeParams,dataFactory){
			$scope.ChatTitle="No Title";
			$scope.msgs=[];
      $scope.NoChat=true;

      // dataFactory.query("msgs",{"RoomId":$routeParams.RoomId})
      // .success(function(data){
      //   $scope.msgs=data;
      //   if(data.length){
      //     $scope.NoChat=false;
      //   }
      // });

      dataFactory.queryById("rooms",$routeParams.RoomId)
      .success(function(data){
        $scope.ChatTitle=data.RoomName;
      });

      dataFactory.querySSE("msgs",{"RoomId": $routeParams.RoomId})
      .then(function(data){
        console.log(data);
        $scope.msgs= data;
         $scope.NoChat=false;
      });

			$scope.pushMsg=function(msg){
				msg['User'] ={
          "NickName":$cookieStore.get("LoggedInNickName"),
          "UserId"  :$cookieStore.get("LoggedInUserId"),
        }; 
        msg['RoomId']   = $routeParams.RoomId;
        msg['Created']  = new Date().getTime();
        $scope.msg.message="";
        dataFactory.create("msgs",msg)
        .success(function(data){
          console.log(data);
        });

			}
		};


		ChatCtrl.$inject=['$scope','$cookieStore','$location','$routeParams','dataFactory'];
		return ChatCtrl;
	});
}(define));