
(function(define){

  "use strict";
	define([
		"modules/app/services/dataFactory"
		],
		function(dataFactory){
		var uniqueRommDirective=function($http,$q, $timeout,dataFactory){
			return{
				require:  'ngModel' ,
			    link: function(scope, ele, attrs, ctrl) {

			    	ctrl.$asyncValidators.uniquemail = function(modelValue, viewValue) {
			    		if (ctrl.$isEmpty(modelValue)) {
					        return $q.when();
					    }
					    var def = $q.defer();
					    dataFactory.query("rooms",{
				    		RoomName:ele.val()
				    	})
				    	.success(function(data,state,headers,cfg){
				    		if(data.length > 0){
				    			def.reject();
				    		}else{
				    			def.resolve();
				    		}	
				    	})
				    	.error(function(data, status, headers, cfg){
				    		def.resolve();
				    	});
				        return def.promise;
			    	};
				}
			}
		};
		uniqueRommDirective.$inject=['$http','$q', '$timeout','dataFactory'];
		return uniqueRommDirective;
	});
}(define));