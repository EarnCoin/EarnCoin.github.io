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
      controller:function($scope, $rootScope){


	$scope.cat = function ( type ) {
		//alert( type );
		$rootScope.searchKeyword = { cat: type };
		return false;
	}

      }
    }
  }])
.directive('fbComments', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) { 
            element[0].dataset.href = "https://earncoin.github.io";//document.location.href;
            return typeof FB !== "undefined" && FB !== null ? FB.XFBML.parse(element.parent()[0]) : void 0;
        }
    };
});

