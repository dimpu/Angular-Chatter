/**
 *  Use aysnc script loader, configure the application module (for AngularJS)
 *  and initialize the application ( which configures routing )
 *
 *  @author Aravind Buddha
 */

 (function( head ) {
    "use strict";

        require.config (
            {
            appDir  : '',
            baseUrl : './js/app',
            paths   : {
                // Configure alias to full paths
                'vendor'  :'../vendor',
            },
            
        });


        require( [ "main" ], function( app )
        {
            // Application has bootstrapped and started...
        });



}( window.head ));
