require('minimalist') // main file of minimalist
require('minimalist/angular.js') // directives

require('satellizer')
require('angular-ui-router')
require('restangular')

angular.module('app', [
  'minimalist',
  'satellizer',
  'ui.router',
  'restangular',
])
