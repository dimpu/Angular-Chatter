(function(e){e("utils/logger",[],function(){var e=function(){return new Date}();return{debug:function(t){console.log(e+" - "+t)}}})})(define),function(e){e("modules/auth/controller/loginCtrl",[],function(){var e=function(e){};return e.$inject=["$scope"],e})}(define),function(e){e("modules/auth/controller/registerCtrl",[],function(){var e=function(e){};return e.$inject=["$scope"],e})}(define),function(e){e("modules/auth/controller/forgetCtrl",[],function(){var e=function(e){};return e.$inject=["$scope"],e})}(define),function(e,t){e("modules/auth/auth",["modules/auth/controller/loginCtrl","modules/auth/controller/registerCtrl","modules/auth/controller/forgetCtrl"],function(e,n,r){var i="Auth";return t.module(i,[]).controller("loginCtrl",e).controller("registerCtrl",n).controller("forgetCtrl",r),i})}(define,angular),function(){define("RouteManager",[],function(){var e=function(e){e.when("/login",{templateUrl:"./js/app/modules/auth/views/login.html",controller:"loginCtrl"}).when("/register",{templateUrl:"./js/app/modules/auth/views/register.html",controller:"registerCtrl"}).when("/forget",{templateUrl:"./js/app/modules/auth/views/forget.html",controller:"forgetCtrl"}).when("/forget",{templateUrl:"./js/app/modules/auth/views/forget.html",controller:"forgetCtrl"}).otherwise({redirectTo:"/login"})};return e.$inject=["$routeProvider"],e})}(define),function(e){e("modules/app/directives/videoBgDirective",[],function(){var e=function(){return{templateUrl:"/js/app/modules/app/views/partials/_video_bg.html",compile:function(e,t,n){return{post:function(){$(".player").mb_YTPlayer()}}}}};return e})}(define),function(e){e("main",["utils/logger","modules/auth/auth","RouteManager","modules/app/directives/videoBgDirective"],function(e,t,n,r){var i={},s="Chatter";return e.debug("Initilizing "+s),i=angular.module(s,["ngRoute","ngSanitize","ngAnimate","Auth"]).directive("videoBg",r).config(n),angular.bootstrap(document.getElementsByTagName("body")[0],[s]),i})}(define);