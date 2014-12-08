


(function ( define ) {

	define([], 
		function(){
			var loginCtrl=function($scope,$cookieStore,$location,dataFactory){
        var loader = Ladda.create(document.getElementById("form-login-btn"));
      	
        $scope.login=function(user){
          loader.start();
          dataFactory.query("users",user)
          .success(function(data){
            console.log(data);
            loader.stop();
            if(data.length){
              $scope.loginSuccess = true;
              $scope.loginError=true;
              $cookieStore.put("LoggedInUserId",data[0]._id.$oid);
              $cookieStore.put("LoggedInNickName",data[0].NickName);
              $location.path('/rooms');
            }else{
              $scope.loginError=true;
            }
            loader.stop();
          }).error(function(data){
             loader.stop();
          });

				};
		};
		loginCtrl.$inject=['$scope','$cookieStore','$location','dataFactory'];

		return loginCtrl;
	});
	
}( define ));

