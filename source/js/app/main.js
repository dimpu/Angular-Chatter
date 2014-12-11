/**
 * Now let's start our AngularJS app...
 * which uses RequireJS to load  packages and code
 *
 */
(function ( define ) {
    "use strict";

    define([
            "RunManager",
            "modules/app/services/dataFactory",
            "modules/auth/auth",
            "modules/rooms/rooms",
            "RouteManager" ,
            'modules/app/directives/videoBgDirective'
        ],
        function (RunManager,dataFactory,Auth,Rooms,RouteManager,videoBgDirective){
           
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
                    .run(RunManager);
            angular.bootstrap( document.getElementsByTagName("body")[0], [ appName ]);
            return app;
        }
    );

}( define ));
