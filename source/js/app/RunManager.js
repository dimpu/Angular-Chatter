

(function (define){
  "use strict";
	define([],function(){
		var RunManager=function($rootScope,$location){
			console.log("run");
			$rootScope.$on("$routeChangeStart", function (event, next, current) {
				
			});
		};

		RunManager.$inject=['$rootScope','$location']
		return RunManager;
	});

}(define));