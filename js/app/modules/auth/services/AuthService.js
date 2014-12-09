

(function (define){
	"use strict";
	define([],function(){

		var AuthService = function($cookieStore,dataFactory){
			var self = this;
			
			self.login=function(user,callback){
				dataFactory.query("users",user)
          		.success(function(data){            
		            if(data.length){
		            	var cookie_data={
		            		LoggedInUserId      :data[0]._id.$oid,
		            		LoggedInNickName:data[0].NickName
		            	};
		              	self.createCookies(cookie_data);
		            	callback(true);  
		            }else{
		            	callback(false)
		            }
		        }).error(function(data){
	             	callback(false)	          	
	            });
			};

			self.register = function(user,callback){
				dataFactory.create("users",user)
		        .success(function(data){
		        	var cookie_data={
            			LoggedInUserId  : data._id.$oid,
            			LoggedInNickName: data.NickName
		        	};
		            self.createCookies(cookie_data);
		            callback(true);
		        })
		        .error(function(){
		          callabck(false)
		        });
			};

			self.isAuthenticated=function(){
				if($cookieStore.get("LoggedInUserId") == undefined){
					return false;
				}
				return true;
			};

			self.logout = function(){
				$cookieStore.remove('LoggedInUserId');
        		$cookieStore.remove('LoggedInUserId');
			};

			self.createCookies=function(data){
				$cookieStore.put("LoggedInUserId",data.LoggedInUserId);
		        $cookieStore.put("LoggedInNickName",data.LoggedInNickName);
			};
			return self;
		};
		AuthService.$inject=['$cookieStore','dataFactory'];
		return AuthService;
	})
}(define));