
//rooms Menu Ctrl

(function ( define ){
"use strict";
  define([],function(){
    var MenuCtrl=function($scope, $log,$cookieStore,$location){
      $log.log("Initialize Menu"+ new Date());   
      $scope.logout=function(){
        $cookieStore.remove('LoggedInUserId');
        $cookieStore.remove('LoggedInUserId');
        $location.path('/');
      }; 
    };
    MenuCtrl.$inject=['$scope','$log','$cookieStore','$location'];
    return MenuCtrl;
  });

}(define));