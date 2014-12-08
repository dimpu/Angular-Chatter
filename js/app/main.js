(function(e){e("utils/logger",[],function(){var e=function(){return new Date}();return{debug:function(t){console.log(e+" - "+t)}}})})(define),function(e){e("modules/app/services/dataFactory",[],function(){var e=function(e,t){var n="docEemXMEKY0WbS-EKHKHXCQQuolbDYP",r="chatter",i="https://api.mongolab.com/api/1/databases",s=function(t,s){s=s||{};var o={};o.q=JSON.stringify(s),o.apiKey=n;var u=i+"/"+r+"/collections/"+t;return e({method:"GET",url:u,params:o,cache:!1})},o=function(t,s,o){o=o||{},o.apiKey=n;var u=i+"/"+r+"/collections/"+t+"/"+s;return e({method:"GET",url:u,params:o,cache:!1})},u=function(t,s){var o=i+"/"+r+"/collections/"+t+"?apiKey="+n;return e({method:"POST",url:o,data:JSON.stringify(s),cache:!1})},a=function(t,s){var o=i+"/"+r+"/collections/"+t+"/"+s._id.$oid+"?apiKey="+n;return e({method:"PUT",url:o,data:JSON.stringify(s),cache:!1})},f=function(t,s){var o=i+"/"+r+"/collections/"+t+"/"+s._id.$oid+"?apiKey="+n;return e({method:"DELETE",url:o,cache:!1})};return{query:s,queryById:o,create:u,update:a,"delete":f}};return e.$inject=["$http","$q"],e})}(define),function(e){e("modules/auth/directives/uniqueUserDirective",["modules/app/services/dataFactory"],function(e){var t=function(e,t,n,r){return{require:"ngModel",link:function(e,n,i,s){s.$asyncValidators.uniqueuser=function(e,i){if(s.$isEmpty(e))return t.when();var o=t.defer();return r.query("users",{username:n.val()}).success(function(e,t,n,r){e.length>0?o.reject():o.resolve()}).error(function(e,t,n,r){o.resolve()}),o.promise}}}};return t.$inject=["$http","$q","$timeout","dataFactory"],t})}(define),function(e){e("modules/auth/directives/uniqueEmailDirective",["modules/app/services/dataFactory"],function(e){var t=function(e,t,n,r){return{require:"ngModel",link:function(e,n,i,s){s.$asyncValidators.uniquemail=function(e,i){if(s.$isEmpty(e))return t.when();var o=t.defer();return r.query("users",{email:n.val()}).success(function(e,t,n,r){e.length>0?o.reject():o.resolve()}).error(function(e,t,n,r){o.resolve()}),o.promise}}}};return t.$inject=["$http","$q","$timeout","dataFactory"],t})}(define),function(e){e("modules/auth/controller/loginCtrl",[],function(){var e=function(e,t,n,r){var i=Ladda.create(document.getElementById("form-login-btn"));e.login=function(s){i.start(),r.query("users",s).success(function(r){console.log(r),i.stop(),r.length?(t.put("LoggedInUserId",r[0]._id.$oid),t.put("LoggedInNickName",r[0].NickName),n.path("/rooms")):e.loginError=!0,i.stop()}).error(function(e){i.stop()})}};return e.$inject=["$scope","$cookieStore","$location","dataFactory"],e})}(define),function(e){e("modules/auth/controller/registerCtrl",["modules/app/services/dataFactory"],function(e){var t=function(e,t,n,r){e.register_user=function(e){var i=Ladda.create(document.getElementById("form-register-btn"));e.Created=e.Updated=(new Date).getTime(),i.start(),r.create("users",e).success(function(e){t.put("LoggedInUserId",e._id.$oid),t.put("LoggedInNickName",e.NickName),n.path("/rooms"),i.stop()}).error(function(){i.stop()})}};return t.$inject=["$scope","$cookieStore","$location","dataFactory"],t})}(define),function(e){e("modules/auth/controller/forgetCtrl",[],function(){var e=function(e){};return e.$inject=["$scope"],e})}(define),function(e,t){e("modules/auth/auth",["modules/app/services/dataFactory","modules/auth/directives/uniqueUserDirective","modules/auth/directives/uniqueEmailDirective","modules/auth/controller/loginCtrl","modules/auth/controller/registerCtrl","modules/auth/controller/forgetCtrl"],function(e,n,r,i,s,o){var u="Auth";return t.module(u,["ngCookies"]).factory("dataFactory",e).directive("uniqueuser",n).directive("uniquemail",r).controller("loginCtrl",i).controller("registerCtrl",s).controller("forgetCtrl",o),u})}(define,angular),function(e){e("modules/rooms/controllers/HomeCtrl",["modules/app/services/dataFactory"],function(){var e=function(e,t,n,r){e.rooms=[],e.IsLoading=!0,e.RoomsNotAvilable=!1;var i={$or:[{CreatorId:t.get("LoggedInUserId")},{IsPublic:!0}]};r.query("rooms",i).success(function(t){e.rooms=t,e.IsLoading=!1,t.length>0?e.RoomsNotAvilable=!1:e.RoomsNotAvilable=!0})};return e.$inject=["$scope","$cookieStore","$location","dataFactory"],e})}(define),function(e){e("modules/rooms/controllers/MenuCtrl",[],function(){var e=function(e,t,n){var r;e.openCreateRoomWindow=function(){r=t.open({templateUrl:"js/app/modules/rooms/views/partials/CreatRoom.html",controller:"CreateRoomCtrl",resolve:{items:function(){return e.items}}})}};return e.$inject=["$scop"],e})}(define),function(e){e("modules/rooms/controllers/CreateCtrl",[],function(){var e=function(e,t,n,r){var i=Ladda.create(document.getElementById("form-room-crete-btn"));e.createRoom=function(e){e.CreatorId=t.get("LoggedInUserId"),i.start(),console.log(e),r.create("rooms",e).success(function(e){console.log(e),i.stop(),n.path("/rooms")})}};return e.$inject=["$scope","$cookieStore","$location","dataFactory"],e})}(define),function(e){e("modules/rooms/controllers/ChatCtrl",[],function(){var e=function(e,t,n,r,i,s){e.ChatTitle="No Title",e.msgs=[],e.NoChat=!0,e.scrollTop=0,e.scrollHeight=0,e.onScroll=function(t,n){e.scrollTop=t,e.scrollHeight=n},s.queryById("rooms",i.RoomId).success(function(t){e.ChatTitle=t.RoomName});var o=t(function(){s.query("msgs",{RoomId:i.RoomId}).then(function(t){console.log(t),e.msgs=t.data,e.NoChat=!1;var n=$(".scroller div").height(),r=$(".scroller").scrollTop();console.log(n+" :: "+r),$(".scroller").scrollTop($(".scroller div").height()),$(".scroller").perfectScrollbar("update"),r<=n&&r>n-100})},500);e.pushMsg=function(t){t.User={NickName:n.get("LoggedInNickName"),UserId:n.get("LoggedInUserId")},t.RoomId=i.RoomId,t.Created=(new Date).getTime(),s.create("msgs",t).success(function(e){console.log(e)}),e.msg.MsgText=""}};return e.$inject=["$scope","$interval","$cookieStore","$location","$routeParams","dataFactory"],e})}(define),function(e){e("modules/rooms/directives/uniqueRommDirective",["modules/app/services/dataFactory"],function(e){var t=function(e,t,n,r){return{require:"ngModel",link:function(e,n,i,s){s.$asyncValidators.uniquemail=function(e,i){if(s.$isEmpty(e))return t.when();var o=t.defer();return r.query("rooms",{RoomName:n.val()}).success(function(e,t,n,r){e.length>0?o.reject():o.resolve()}).error(function(e,t,n,r){o.resolve()}),o.promise}}}};return t.$inject=["$http","$q","$timeout","dataFactory"],t})}(define),function(e){e("modules/rooms/rooms",["modules/rooms/controllers/HomeCtrl","modules/rooms/controllers/MenuCtrl","modules/rooms/controllers/CreateCtrl","modules/rooms/controllers/ChatCtrl","modules/rooms/directives/uniqueRommDirective"],function(e,t,n,r,i){var s="Rooms";return angular.module(s,["perfect_scrollbar"]).controller("rooms.HomeCtrl",e).controller("rooms.CreateCtrl",n).controller("rooms.ChatCtrl",r).directive("uniqueroom",i),s})}(define),function(e){e("modules/dashboard/controller/homeCtrl",[],function(){var e=function(e){e.rooms=[{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"},{name:"name",pic:"mypic.jpg"}]};return e.$inject=["$scope"],e})}(define),function(e){e("modules/dashboard/dashboard",["modules/dashboard/controller/homeCtrl"],function(e){var t="chatter.dashboard";return angular.module(t,[]).controller("dashboard.homeCtrl",e),t})}(define),function(){define("RouteManager",[],function(){var e=function(e){e.when("/login",{templateUrl:"./js/app/modules/auth/views/login.html",controller:"loginCtrl"}).when("/register",{templateUrl:"./js/app/modules/auth/views/register.html",controller:"registerCtrl"}).when("/forget",{templateUrl:"./js/app/modules/auth/views/forget.html",controller:"forgetCtrl"}).when("/forget",{templateUrl:"./js/app/modules/auth/views/forget.html",controller:"forgetCtrl"}).when("/dashboard",{templateUrl:"./js/app/modules/bashboard/views/home.html",controller:"dashboard.homeCtrl"}).when("/rooms",{templateUrl:"./js/app/modules/rooms/views/home.html",controller:"rooms.HomeCtrl"}).when("/rooms/create",{templateUrl:"./js/app/modules/rooms/views/create.html",controller:"rooms.CreateCtrl"}).when("/room/:RoomId",{templateUrl:"./js/app/modules/rooms/views/chat.html",controller:"rooms.ChatCtrl"}).otherwise({redirectTo:"/login"})};return e.$inject=["$routeProvider"],e})}(define),function(e){e("modules/app/directives/videoBgDirective",[],function(){var e=function(){return{templateUrl:"./js/app/modules/app/views/partials/video-bg.html",compile:function(e,t,n){return{post:function(){}}}}};return e})}(define),function(e){e("main",["utils/logger","modules/app/services/dataFactory","modules/auth/auth","modules/rooms/rooms","modules/dashboard/dashboard","RouteManager","modules/app/directives/videoBgDirective"],function(e,t,n,r,i,s,o){var u={},a="Chatter";return e.debug("Initilizing "+a),u=angular.module(a,["ngRoute","ngSanitize","ngAnimate","Auth","Rooms"]).factory("dataFactory",t).directive("videoBg",o).config(s),angular.bootstrap(document.getElementsByTagName("body")[0],[a]),u})}(define);