/**
 * @author aravindbuddha
 * @desc   ChatCtrl
 */


(function (define){

  "use strict";

  define([],function(){
    var ChatCtrl=function($scope,$log,$timeout,$cookieStore,$location,$routeParams,dataFactory)
    {
      $scope.ChatTitle    = "No Title";
      $scope.msgs         = [];
      $scope.NoChat       = false;
      $scope.isLoading    = true;
      $scope.scrollTop    = 0
      $scope.scrollHeight = 0

      //Inset Msg to db
      $scope.pushMsg=function(msg){
        msg['User'] ={
          "NickName":$cookieStore.get("LoggedInNickName"),
          "UserId"  :$cookieStore.get("LoggedInUserId"),
        }; 
        msg['RoomId']   = $routeParams.RoomId;
        msg['Created']  = new Date().getTime();
        
        //db call
        dataFactory.create("msgs",msg)
        .success(function(data){
          console.log(data);
        });
        $scope.msg.MsgText="";
      };

      //scroll event for custom perfect-scroller
      $scope.onScroll = function (scrollTop, scrollHeight) {
        $scope.scrollTop = scrollTop
        $scope.scrollHeight = scrollHeight
      }

      //fetching rooms form  serve with RoomID.
      dataFactory.queryById("rooms",$routeParams.RoomId)
      .success(function(data){
        $scope.ChatTitle=data.RoomName;
      });

      (function pull(){
        dataFactory.query("msgs",{"RoomId": $routeParams.RoomId})
        .then(function(data){
           if(data.data.length) {
              $scope.NoChat    = false; 
            } else {
              $scope.NoChat=true; 
            }
            $scope.msgs = data.data;
            $scope.isLoading = false
            $(".scroller").scrollTop($(".scroller div").height());
            $(".scroller").perfectScrollbar('update');
            
            // if($scope.scrollTop > $scope.scrollHeight - 10){
            //   $(".scroller").scrollTop($(".scroller div").height());
            //   $(".scroller").perfectScrollbar('update');  
            // }
            
            $log.log("$scope.scrollTop:"+$scope.scrollTop);
            $log.log("$scope.scrollHeight:"+$scope.scrollHeight);
            $timeout(pull(),500);


        });      
      }());
    };
    ChatCtrl.$inject=['$scope','$log','$interval','$cookieStore','$location','$routeParams','dataFactory'];
    return ChatCtrl;

  });
  


}(define));