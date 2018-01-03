'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'scripts/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
		controller:function($scope,  $modal, $q, $http){


	//open github repo readme as makedown view in modal
	$scope.open = function () {
		
		if ( modalInstance != null )
				return;
			
	    var modalInstance = $modal.open({
			templateUrl: "scripts/directives/dashboard/stats/appdetails/app-detail.html",
	      controller:function ($sce, $scope, $modalInstance, readme ) {
				
	
				var converter = new Showdown.converter();
				
				
				//atob(readme)
				  $scope.details = $sce.trustAsHtml( converter.makeHtml(decodeURIComponent(escape(window.atob(readme)))));
			  
				  $scope.cancel = function () {
					$modalInstance.dismiss('cancel');
				  };
				} ,
				size: 'lg',
				resolve: {
				readme: function () {
			
					var deferred = $q.defer();			

					$http.get("https://api.github.com/repos/earncoin/earncoin.github.io/readme")
					 .success(function (data) {
				 
							deferred.resolve(data.content);
					});

				return deferred.promise;
	        }
	      }
	    });

  	};

	
	}
	}
	});


