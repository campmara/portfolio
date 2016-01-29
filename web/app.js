'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
            .when('/', {
                templateUrl : '/index.html',
                controller : mainController
            })
            .when('/games', {
                templateUrl : '/games.html',
                controller : mainController
            })
            .when('/music', {
                templateUrl : '/music.html',
                controller : mainController
            });
            .when('/writing', {
                templateUrl : '/writing.html',
                controller : mainController
            });
            .otherwise({redirectTo: '/view1'});

            // use the HTML5 History API
        	$locationProvider.html5Mode(true);
	}]);


/*
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
*/
