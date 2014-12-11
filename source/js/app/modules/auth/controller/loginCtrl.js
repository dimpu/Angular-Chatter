


(function ( define ) {
"use strict";
	define([], 
		function(){
			var LoginCtrl=function($scope,$cookieStore,$location,AuthService){
        $scope.loginError=false;
        var loader = Ladda.create(document.getElementById("form-login-btn"));

        $scope.login=function(user){
          loader.start();
          AuthService.login(user,function(isSuccess){
            if(isSuccess){
              $scope.loginSuccess = true;
              $scope.loginError=false;
              $location.path('/rooms');
            }else{
              $scope.loginError=true;              
            }
            loader.stop();
          });
				};
		};
		LoginCtrl.$inject=['$scope','$cookieStore','$location','AuthService'];

		return LoginCtrl;
	});
	
}( define ));

