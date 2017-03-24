'use strict';

/**
 * @ngdoc function
 * @name fizzyFlutesApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the fizzyFlutesApp
 */
angular.module('fizzyFlutesApp')
  .controller('ContactCtrl', function ($scope, NgMap) {
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  });
