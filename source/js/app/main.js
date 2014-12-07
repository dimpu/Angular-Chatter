/**
 * Now let's start our AngularJS app...
 * which uses RequireJS to load  packages and code
 *
 */
(function ( define ) {
    "use strict";

    define([
            "utils/logger",
            "modules/app/services/dataFactory",
            "modules/auth/auth",
            "modules/rooms/rooms",
            "modules/dashboard/dashboard",
            "RouteManager" ,
            'modules/app/directives/videoBgDirective'
        ],
        function ($log,dataFactory,Auth,Rooms,DashBoard,RouteManager,videoBgDirective){
           
            var 
            app     = {}, 
            appName = 'Chatter';
            $log.debug("Initilizing "+ appName);

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
                    .config( RouteManager );
                    // .config(['$compileProvider ',function($compileProvider ){
                    //     $compileProvider.debugInfoEnabled(true)
                    // }]);

            angular.bootstrap( document.getElementsByTagName("body")[0], [ appName ]);

            return app;
        }
    );

}( define ));
