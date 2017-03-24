'use strict';

/**
 * @ngdoc overview
 * @name fizzyFlutesApp
 * @description
 * # fizzyFlutesApp
 *
 * Main module of the application.
 */
angular
  .module('fizzyFlutesApp', [
    'ngAnimate',
    'ngCookies',
    'angular.filter',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btford.markdown',
    'ui.bootstrap',
    'ngMap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
    $locationProvider.html5Mode(true);
  });
