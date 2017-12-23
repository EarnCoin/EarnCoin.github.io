'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebar',['$location',function() {
    return {
      templateUrl:'scripts/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope, $rootScope,  $http){

		$scope.cat = function ( type ) {
		
		
		if (type!=""){
			//alert("."+ type);
			//get type
			$http.get("https://api.github.com/users/earncoin/repos")
			  .success(function (data) {

			  var apps=[];
			  
				for (var i=0; i<data.length; i++){
					var details ={};
						if (data[i].name.indexOf("."+type)!=-1){
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
			  
				$rootScope.apps = apps;
			});
		}
		else{
			$rootScope.apps ="";
		}
			//$rootScope.searchKeyword = { cat: type };
			return false;
		}

      }
    }
  }]);

