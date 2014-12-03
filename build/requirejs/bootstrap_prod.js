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
      { require    : "./js/vendor/requirejs/require.js",                        size: "80196"   },
      { jquery     : "./js/vendor/jquery/jquery.js",                            size: "80196"   },
      { ytplayer   : "./js/vendor/jquery.mb.ytplayer/inc/jquery.mb.ytplayer.js",size: "80196"   },
      { angular    : "./js/vendor/angular/angular.js",                          size: "551057"  },
      { ngAnimate  : "./js/vendor/angular-animate/angular-animate.js",          size: "30052"   },
      { ngRoute    : "./js/vendor/angular-route/angular-route.js",              size: "30052"   },
      { ngSanitize : "./js/vendor/angular-sanitize/angular-sanitize.js",        size: "19990"   },
      { chatter    : "./js/app/chatter.js",                                     size: "19990"   }

    )
    .ready("ALL", function() {

        require.config ({
            appDir  : '',
            baseUrl : './js/app',
            paths   : {
                // Configure alias to full paths
                'vendor'  :'../vendor',
            },
            
        });


        require( [ "modules/app/app" ], function( app )
        {
            // Application has bootstrapped and started...
        });


    });



}( window.head ));
