'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function( $scope, $position, $http ) {

	

	//get my all repos
	$http.get("https://api.github.com/users/earncoin/repos")
	  .success(function (data) {

	  var apps=[];
	  
		for (var i=0; i<data.length; i++){
			var details ={};
				if (data[i].name.indexOf(".faucet")!=-1){
    					try{
	        				var g_Description = JSON.parse(data[i].description);
						details["title"]= g_Description.title;
						details["name"] = data[i].name;
						details["cat"] =  g_Description.cat;
						details["description"] = g_Description.description;
						details["default_branch"] = data[i].default_branch;
						details["homepage"] = data[i].homepage;
						apps.push( details );
    					}catch(e){
        					console.log(e); //error in the above string(in this case,yes)!
    					}
				
				}
		}
	  
		$scope.apps = apps;
	});

  });
