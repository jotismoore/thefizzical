'use strict';

angular.module('fizzyFlutesApp')
  .directive('responsiveNav', ['$window', function ($window) {

    function link(scope, element, attrs){

      scope.width = $window.innerWidth;

      $('.header_switch').click(function(){
        $('.navigation').slideToggle();
        $('.link').click(function(){
          $('.navigation').slideUp();
        })
      });

      angular.element($window).bind('resize', function(){
        scope.width = $window.innerWidth;
        scope.$digest();

        if (scope.width < 992) {
          $('.navigation').hide();
        } else {
          $('.navigation').show();
        }
      });

    }
    return {
      link: link,
      restrict: 'E'
    };

  }]);
