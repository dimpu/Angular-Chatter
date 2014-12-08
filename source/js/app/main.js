/**
 * Now let's start our AngularJS app...
 * which uses RequireJS to load  packages and code
 *
 */
(function ( define ) {
    "use strict";

    define([
            "modules/app/services/dataFactory",
            "modules/auth/auth",
            "modules/rooms/rooms",
            "modules/dashboard/dashboard",
            "RouteManager" ,
            'modules/app/directives/videoBgDirective'
        ],
        function (dataFactory,Auth,Rooms,DashBoard,RouteManager,videoBgDirective){
           
            var 
            app     = {}, 
            appName = 'Chatter';

            /**
             * Start the main application
             *
             * We manually start this bootstrap process; since ng:app is gone
             * ( necessary to allow Loader splash pre-AngularJS activity to finish properly )
             */

            app = angular
                    .module(
                        appName,
                        [ "ngRoute", "ngSanitize","ngAnimate","Auth","Rooms"]
                    )
                    .factory('dataFactory', dataFactory)
                    .directive('videoBg',videoBgDirective)
                    .config( RouteManager )
                    .run(function($routeChangeStart){
                         $rootScope.$on("$routeChangeStart", function (event, next, current) {
                            alert("HI");
                         });
                    });
                    // .config(['$compileProvider ',function($compileProvider ){
                    //     $compileProvider.debugInfoEnabled(true)
                    // }]);
            angular.bootstrap( document.getElementsByTagName("body")[0], [ appName ]);
            return app;
        }
    );

}( define ));
