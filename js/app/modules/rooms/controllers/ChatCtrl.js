


(function (define){
	define([],function(){
		var ChatCtrl =function($scope,$cookieStore,$location,$routeParams,dataFactory){
			$scope.ChatTitle="No Title";
			$scope.msgs=[];
      $scope.NoChat=true;

      dataFactory.querySSE("msgs",{"RoomId": $routeParams.RoomId})
      .then(function(data){
        console.log(data);
      });

			$scope.pushMsg=function(msg){
				msg['User'] ={
          "NickName":$cookieStore.get("LoggedInNickName"),
          "UserId"  :$cookieStore.get("LoggedInUserId"),
        }; 
        msg['RoomId']   = $routeParams.RoomId;
        msg['Created']  = new Date().getTime();

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