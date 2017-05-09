'use strict';

// Declare app level module which depends on views, and components
/*
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
            .when('/index.html', {
                templateUrl : '/',
                controller : mainController
            })
            .when('/games,html', {
                templateUrl : '/games',
                controller : mainController
            })
            .when('/music.html', {
                templateUrl : '/music',
                controller : mainController
            });
            .when('/writing.html', {
                templateUrl : '/writing',
                controller : mainController
            });
            .otherwise({redirectTo: '/view1'});

            // use the HTML5 History API
        	$locationProvider.html5Mode(true);
	}]);
*/

angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
