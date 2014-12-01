/**
 *  Use aysnc script loader, configure the application module (for AngularJS)
 *  and initialize the application ( which configures routing )
 *
 *  @author Aravind Buddha
 */

 (function( head ) {
    "use strict";
    head.js(
      // Pre-load these for splash-screen progress bar...
      { require    : "./js/vendor/requirejs/require.js",                  size: "80196"   },
      // { underscore : "./js/vendor/underscore/underscore.js",              size: "43568"   },
      { angular    : "./js/vendor/angular/angular.js",                    size: "551057"  },
      { ngRoute    : "./js/vendor/angular-route/angular-route.js",        size: "30052"   },
      { ngSanitize : "./js/vendor/angular-sanitize/angular-sanitize.js",  size: "19990"   }

    )
    .ready("ALL", function() {

        require.config (
            {
            appDir  : '',
            baseUrl : './js/app',
            paths   : {
                // Configure alias to full paths
                // 'auth'         : './quizzer/authentication',
                // 'quiz'         : './quizzer/quiz',
                // 'utils'        : './mindspace/utils'
            },
            shim    : {
                // 'underscore': {
                //     exports : '_'
                // }
            }
        });


        require( [ "main" ], function( app )
        {
            // Application has bootstrapped and started...
        });


    });



}( window.head ));
