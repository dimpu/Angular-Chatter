
(function(define){
	define([
		"modules/app/services/dataFactory"
		],
		function(dataFactory){
		var uniqueEmailDirective=function($http,dataFactory){
			return{
				require: 'ngModel',
			    link: function(scope, ele, attrs, ctrl) {

			    	ctrl.$parsers.push(function (userEmailValue) {
			    		dataFactory.query("users",{
			    			username:userEmailValue
			    		})
			    		.success(function(data,state,headers,cfg){
			    			if(data.length > 0)
			    				ctrl.$setValidity('uniquemail', false);
			    		})
			    		.error(function(data, status, headers, cfg){
			    			ctrl.$setValidity('uniquemail', false);
			    		});
			    	});
				}
			}
		};
		uniqueEmailDirective.$inject=['$http','dataFactory'];
		return uniqueEmailDirective;
	});
}(define));