

(function ( define ) {

      
	define([ "modules/app/services/dataFactory" ],function(dataFactory){
		var registerCtrl=function($scope,dataFactory){
      $scope.register=function(){
        var user_data= {
          username   : "aravindbuddha",
          password   : "dimpuaravind",
          email      : "buddhaaravind@gmail.com",
          created    : new Date().getTime(),
          updated    : new Date().getTime()
        };

        dataFactory.create("users",user_data);

       // var url="https://api.mongolab.com/api/1/databases/chatter/collections/users?apiKey=docEemXMEKY0WbS-EKHKHXCQQuolbDYP";
        // $http({
        //   method: "POST", 
        //   url: url, 
        //   data:JSON.stringify(user_data), 
        //   cache: false
        // });
        // dataFactory.createObject({
        //   username   :"aravindbuddha",
        //   password   :"dimpuaravind",
        //   email      :"buddhaaravind@gmail.com",
        //   created    :new Date(),
        //   updated    :new Data()
        // });  
      }
      
		};
		registerCtrl.$inject=['$scope','dataFactory'];

		return registerCtrl;
	});
	
}( define ));

