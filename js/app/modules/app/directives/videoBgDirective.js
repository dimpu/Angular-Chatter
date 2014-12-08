


(function ( define ){

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