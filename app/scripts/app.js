'use strict';

angular
  .module('myApp', ['ngMaterial', 'ngMessages', 'input'])
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '500'
      })
      .accentPalette('deep-orange', {
        'default': '500'
      })
      .warnPalette('red', {
        'default': '900'
      });
  }]);
