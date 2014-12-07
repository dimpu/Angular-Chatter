

(function ( define ) {

      
	define([ "modules/app/services/dataFactory" ],function(dataFactory){
		var registerCtrl=function($scope,$cookieStore,$location,dataFactory){
      $scope.register_user=function(user){
      var loader = Ladda.create(document.getElementById("form-register-btn"));
        user['Created']= user['Updated'] = new Date().getTime();
        loader.start();
        dataFactory.create("users",user)
        .success(function(data){
          $cookieStore.put("LoggedInUserId",data._id.$oid);
          $cookieStore.put("LoggedInNickName",data.NickName);
          $location.path('/rooms');
          loader.stop();
        })
        .error(function(){
          loader.stop();
        });
      }
      
		};
		registerCtrl.$inject=['$scope','$cookieStore','$location','dataFactory'];

		return registerCtrl;
	});
	
}( define ));

