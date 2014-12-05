


(function (define){

	define(["modules/app/services/dataFactory"],function(dataFactory){
		var roomHomeCtrl=function($scope){
			$scope.rooms=[];
			

		};
		roomHomeCtrl.$inject=['$scope'];

		return roomHomeCtrl;


	});

}(define));