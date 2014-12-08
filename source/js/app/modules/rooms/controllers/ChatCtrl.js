


(function (define){
	define([],function(){
		var ChatCtrl =function($scope,$interval,$cookieStore,$location,$routeParams,dataFactory){
			$scope.ChatTitle="No Title";
			$scope.msgs=[];
      $scope.NoChat=true;

      $scope.scrollTop = 0
      $scope.scrollHeight = 0
      $scope.onScroll = function (scrollTop, scrollHeight) {
        $scope.scrollTop = scrollTop
        $scope.scrollHeight = scrollHeight
      }

      dataFactory.queryById("rooms",$routeParams.RoomId)
      .success(function(data){
        $scope.ChatTitle=data.RoomName;
      });
      var promise = $interval(function(){
        dataFactory.query("msgs",{"RoomId": $routeParams.RoomId})
        .then(function(data){
          console.log(data);
            $scope.msgs = data.data;
            $scope.NoChat=false;
            var divHeight=$(".scroller div").height();
            var scrollPos=$(".scroller").scrollTop();
            console.log(divHeight +" :: "+ scrollPos);
            $(".scroller").scrollTop($(".scroller div").height());
            $(".scroller").perfectScrollbar('update');

            if(scrollPos <= divHeight && scrollPos > divHeight -100 ) {
             
            }
           
        });

      },500);

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
        $scope.msg.MsgText="";
			}
		};


		ChatCtrl.$inject=['$scope','$interval','$cookieStore','$location','$routeParams','dataFactory'];
		return ChatCtrl;
	});
}(define));