'use strict';

angular.module('fizzyFlutesApp')
  .directive('scrollOnClick', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, $elm, attrs) {
        var idToScroll = attrs.href;
        $elm.on('click', function(e) {
          e.preventDefault();
          var $target,
            documentTop = $(document).scrollTop();
          if (idToScroll) {
            $target = $(idToScroll);
          } else {
            $target = $elm;
          }
          if (documentTop !== ($target.offset().top) - 50) {
            $timeout(function () {
              $("body, html").animate({scrollTop: ($target.offset().top) - 50}, 'slow');
            }, 1);
          }
        });
      }
    };
  });
