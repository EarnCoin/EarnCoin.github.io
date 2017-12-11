'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('stats',function() {
    	return {
  		templateUrl:'scripts/directives/dashboard/stats/stats.html',
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'title': '@',
        'number': '@',
        'name': '@',
        'colour': '@',
        'details':'@',
	'branch':'@',
        'type':'@',
        'description':'@'
  		},
      controller:function($scope,  $modal, $q, $http){


	//open github repo readme as makedown view in modal
	$scope.open = function ( title ) {
		
	    var modalInstance = $modal.open({
	      templateUrl: "scripts/directives/dashboard/stats/appdetails/app-detail.html",
	      controller:ModalInstanceCtrl,
	      size: 'lg',
		resolve: {
	        readme: function () {
			var deferred = $q.defer();			

			$http.get("https://api.github.com/repos/lagendre/"+ title +"/readme" )
	 		 .success(function (data) {
		 
				    deferred.resolve(data.content);
			});

			return deferred.promise;
	        }
	      }
	    });

  	};

	//modal ctrl for github readme markdown
	var ModalInstanceCtrl = function ($sce, $scope, $modalInstance, readme) {

	var converter = new Showdown.converter();
	
	  $scope.details = $sce.trustAsHtml( converter.makeHtml(atob(readme)));

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	};
	
	}
  		
  	}
  });
