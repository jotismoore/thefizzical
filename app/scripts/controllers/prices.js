'use strict';

/**
 * @ngdoc function
 * @name fizzyFlutesApp.controller:PricesCtrl
 * @description
 * # PricesCtrl
 * Controller of the fizzyFlutesApp
 */
angular.module('fizzyFlutesApp')
  .controller('PricesCtrl', function ($scope, $timeout) {
    $scope.enquiry = function(subject) {
      var message = 'Hello, I\'m interested in the ' + subject + ' package';
      $('#contact-form')
        .find('textarea[name="message"]').val(message).end()
        .find('input[name="subject"]').val(subject);
      $timeout(function () {
        $("body, html").animate({scrollTop: ($('#contact-form').offset().top) - 77}, 'slow');
        $('#contact-form').find('input[name="name"]').focus();
      }, 1);
    };
  });
