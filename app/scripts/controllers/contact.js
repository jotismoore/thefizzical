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
      var visibleY = function(el){
        var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height,
          el = el.parentNode;
        do {
          rect = el.getBoundingClientRect();
          if (top <= rect.bottom === false) return false;
          if ((top + height) <= 51) return false;
          el = el.parentNode;
        } while (el != document.body);
        return top <= document.documentElement.clientHeight;
      };

      function attachEvent(element, event, callbackFunction) {
        if (element.addEventListener) {
          element.addEventListener(event, callbackFunction, false);
        } else if (element.attachEvent) {
          element.attachEvent('on' + event, callbackFunction);
        }
      }

      var update = function(){
        $('.link').css('opacity', 0.5);
        if (visibleY(document.getElementById('about'))) {
          $('.link-about').css('opacity', 1);
        }
        if (visibleY(document.getElementById('prices'))) {
          $('.link-prices').css('opacity', 1);
        }
        if (visibleY(document.getElementById('gallery'))) {
          $('.link-gallery').css('opacity', 1);
        }
        if (visibleY(document.getElementById('contact'))) {
          $('.link-contact').css('opacity', 1);
        }
        if (!visibleY(document.getElementById('about')) &&
          !visibleY(document.getElementById('prices')) &&
          !visibleY(document.getElementById('gallery')) &&
          !visibleY(document.getElementById('contact'))) {
          $('.link').css('opacity', 1);
        }
      };
      attachEvent(window, "scroll", update);
      attachEvent(window, "resize", update);
      update();
    });
  });
