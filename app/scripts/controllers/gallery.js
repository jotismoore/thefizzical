'use strict';

/**
 * @ngdoc function
 * @name fizzyFlutesApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the fizzyFlutesApp
 */
angular.module('fizzyFlutesApp')
  .controller('GalleryCtrl', function($scope, instagram) {
    instagram.fetchTagged(function(data) {
      var slides = $scope.slides = data;
      $scope.setActive = function(idx) {
        slides[idx].active=true;
      }
    });
  })
  .factory('instagram', function() {
      return {
        fetchTagged: function(callback) {
          var feed = new Instafeed({
            get:'tagged',
            tagName: 'olivias_fizz',
            userId: '209854882',
            accessToken: '209854882.ba4c844.ae48160551b548229840b5827b2a1574',
            sortBy: 'most-recent',
            limit:'5',
            success: function(response) {
              callback(response.data);
            }
          });
          feed.run();
        }
      };
    });
