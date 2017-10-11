angular
  .module('app')
  .config(SignupConfig)

function SignupConfig($stateProvider) {
  $stateProvider
    .state('signup', {
      url: '/signup',
      views: {
        'main': {
          templateUrl: 'templates/signup.template.html',
          controller: 'SignupController',
          controllerAs: 'signup',
          resolve: {
            data: Users => Users.create(),
          },
        },
      },
    })
}

