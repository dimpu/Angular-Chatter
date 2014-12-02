

(function ( define ){

	define(['jquery',
		'ytplayer'
		],function(){
		var videoBgDirective=function(){
			 return {
			    templateUrl: 'js/app/modules/app/views/partials/_video_bg.html',
			    compile: function(scope,element,attrs){
			    	return {
			    		post:function(){
			    			$(".player").mb_YTPlayer();
			    		}
			    	}
			    }
			  };
		};

		return videoBgDirective;

	});

}(define));