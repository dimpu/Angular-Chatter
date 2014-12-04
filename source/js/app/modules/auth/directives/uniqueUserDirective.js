
(function(define){
	define([
		"modules/app/services/dataFactory"
		],
		function(dataFactory){
		var uniqueUserDirective=function($http,dataFactory){
			return{
				require: 'ngModel',
			    link: function(scope, ele, attrs, ctrl) {

			    	ctrl.$parsers.push(function (userNameValue) {
			    		dataFactory.query("users",{
			    			username:userNameValue
			    		})
			    		.success(function(data,state,headers,cfg){
			    			if(data.length > 0){
			    				ctrl.$setValidity('uniqueuser', false);
			    			}else{
			    				ctrl.$setValidity('uniqueuser', true);
			    			}
			    				
			    		})
			    		.error(function(data, status, headers, cfg){
			    			ctrl.$setValidity('uniqueuser', false);
			    		});
			    	});
				}
			}
		};
		uniqueUserDirective.$inject=['$http','dataFactory'];
		return uniqueUserDirective;
	});
}(define));