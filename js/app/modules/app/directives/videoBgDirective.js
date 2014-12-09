/**
 * @author  Aravind Buddha
 * @desc    To set a video background to the application 
 *
 * 
 */

(function ( define ){
	"use strict";
	define([],function(){
		var videoBgDirective=function(){
			 return {
			    templateUrl: './js/app/modules/app/views/partials/video-bg.html',
			    compile: function(scope,element,attrs){
			    	return {
			    		post:function(){
			    		     // $(".player").mb_YTPlayer();
			    		}
			    	}
			    }
			  };
		};

		return videoBgDirective;

	});

}(define));