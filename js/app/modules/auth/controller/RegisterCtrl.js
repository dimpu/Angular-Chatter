

(function ( define ) {

  "use strict";
      
	define([ 
    "modules/app/services/dataFactory" 
    ],
    function(dataFactory){
		  var RegisterCtrl=function($scope,$cookieStore,$location,AuthService){
        
      $scope.register_user=function(user){
        if($scope.registerForm.$invalid){
          $scope.isInValid=true;
        }
      var loader = Ladda.create(document.getElementById("form-register-btn"));
        user['Created']= user['Updated'] = new Date().getTime();
        loader.start();
        AuthService.register(user,function(isSuccess){
          if(isSuccess){
            $location.path('/rooms');
          }
          loader.stop();
        });
      }
      
		};
		RegisterCtrl.$inject=['$scope','$cookieStore','$location','AuthService'];

		return RegisterCtrl;
	});
	
}( define ));

