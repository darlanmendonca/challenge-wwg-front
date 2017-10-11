angular
  .module('app')
  .config(RoutesConfig)

function RoutesConfig($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(false)
}
