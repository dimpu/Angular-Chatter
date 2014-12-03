/**
 * Now let's start our AngularJS app...
 * which uses RequireJS to load  packages and code
 *
 */
(function ( define ) {
    "use strict";

    define([
            "utils/logger",
            "modules/auth/auth",
            "modules/dashboard/dashboard",
            "RouteManager" ,
            'modules/app/directives/videoBgDirective'
        ],
        function ($log,Auth,DashBoard,RouteManager,videoBgDirective){
           
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
                        [ "ngRoute", "ngSanitize","ngAnimate","Auth"]
                    )
                    .directive('videoBg',videoBgDirective)
                    .config( RouteManager  );

            angular.bootstrap( document.getElementsByTagName("body")[0], [ appName ]);

            return app;
        }
    );

}( define ));
