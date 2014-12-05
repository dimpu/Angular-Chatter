

(function ( define ) {

      
	define([ "modules/app/services/dataFactory" ],function(dataFactory){
		var registerCtrl=function($scope,dataFactory){
      $scope.register_user=function(user){
        var user_data= {
          username   : user.username,
          password   : user.password,
          email      : user.email,
          created    : new Date().getTime(),
          updated    : new Date().getTime()
        };
        console.log(user_data);
        dataFactory.create("users",user_data);
      }
      
		};
		registerCtrl.$inject=['$scope','dataFactory'];

		return registerCtrl;
	});
	
}( define ));

