

(function (define){
	define([],function(){
	var dataFactory=function($http){
		var 
		apiKey  = 'docEemXMEKY0WbS-EKHKHXCQQuolbDYP',
		database= 'chatter',
		baseUrl = 'https://api.mongolab.com/api/1/databases';

		var query = function (collection, q) {
		 	q = q || {};
		 	var 
		 	parameters={};
		 	parameters['q']=JSON.stringify(q);
		 	parameters['apiKey'] = apiKey;
		 	var uri = baseUrl + '/' + database + '/collections/' + collection;
		 	return $http({
		 		method: "GET", 
		 		url   : uri, 
		 		params: parameters,
		 	    cache : false
		 	});
		};
		var queryById = function ( collection, id, parameters){
		 	parameters = parameters || {};
		 	parameters['apiKey'] = apiKey;
		 	var uri = baseUrl + '/' + database + '/collections/' + collection + '/' + id;
		 	return $http({
		 		method: "GET", 
		 		url: uri, 
		 		params: parameters,
		 		cache: false
		 	});
		};
		var createObject = function (collection, object) {
			var uri = baseUrl + '/' + database + '/collections/' + collection + '?apiKey=' + apiKey;
		 	return $http({
		 		method: "POST", 
		 		url: uri, 
		 		data:JSON.stringify(object), 
		 		cache: false
		 	});
		};
		var updateObject = function ( collection, object) {
			var uri = baseUrl + '/' + database + '/collections/' + collection + '/' + object._id.$oid + '?apiKey=' + apiKey;
		 	
		 	return $http({
		 		method: "PUT", 
		 		url   : uri, 
		 		data  : JSON.stringify(object), 
		 		cache : false
		 	});
		};
		var deleteObject = function ( collection, object) {
			var uri = baseUrl + '/' + database + '/collections/' + collection + '/' + object._id.$oid + '?apiKey=' + apiKey;
		 	return $http({
		 		method: "DELETE", 
		 		url: uri, 
		 		cache: false
		 	});
		};




		return{
            query    : query,
            queryById: queryById,
            create   : createObject,
            update   : updateObject,
            delete   : deleteObject
		}
	};

	dataFactory.$inject=['$http'];

	return dataFactory;

	});

}(define));