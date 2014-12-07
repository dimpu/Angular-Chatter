
//rooms Menu Ctrl

(function ( define ){

  define([],function(){
    var MenuCtrl=function($scope, $modal, $log){
      var modalInstance;
      $scope.openCreateRoomWindow=function(){
         modalInstance = $modal.open({
            templateUrl: 'js/app/modules/rooms/views/partials/CreatRoom.html',
            controller: 'CreateRoomCtrl',
            // size: size,
            resolve: {
              items: function () {
                return $scope.items;
              }
            }
          });
      }; 
    };

    MenuCtrl.$inject=['$scop'];

    return MenuCtrl;

  });

}(define));