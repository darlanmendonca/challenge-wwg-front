angular
  .module('app')
  .config(PlacesConfig)

function PlacesConfig($stateProvider) {
  $stateProvider
    .state('places', {
      url: '/places',
      views: {
        'main': {
          templateUrl: 'templates/places.template.html',
          controller: 'PlacesController',
          controllerAs: 'places',
          resolve: {
            list: Places => Places.list(),
          },
        },
      },
    })
}

