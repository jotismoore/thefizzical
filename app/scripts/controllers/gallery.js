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
      $scope.thumbnailSize = 8;
      $scope.thumbnailPage = 1;
      var slides = $scope.slides = data;
      $scope.showThumbnails = slides.slice(($scope.thumbnailPage-1)*$scope.thumbnailSize,$scope.thumbnailPage*$scope.thumbnailSize);
      $scope.setActive = function(idx) {
        $scope.slides[idx].active=true;
        $scope.showThumbnails[idx].active=true;
      }
    });
  })
  .factory('instagram', function() {
      return {
        fetchTagged: function(callback) {
          var feed = new Instafeed({
            get:'tagged',
            tagName: 'fizzyflutes',
            userId: '209854882',
            accessToken: '209854882.ba4c844.ae48160551b548229840b5827b2a1574',
            sortBy: 'most-recent',
            limit:'8',
            success: function(response) {
              callback(response.data);
            }
          });
          feed.run();
        }
      };
    });
