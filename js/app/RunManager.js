

(function (define){

	define([],function(){
		var RunManager=function($rootScope, $location){
			console.log("run");
		};

		RunManager.$inject=['$rootScope', '$location']
		return RunManager;
	});

}(define));