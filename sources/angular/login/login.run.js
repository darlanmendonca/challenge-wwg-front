angular
  .module('app')
  .run(LoginRun)

function LoginRun($rootScope, $state, $auth) {
  const stateRequireLogin = $state.name !== 'login' && $state.name !== 'signup'
  const isAuthenticated = $auth.isAuthenticated()


  if (stateRequireLogin && !isAuthenticated) {
    $state.go('login')
  }

  $rootScope.$on('$stateChangeStart', requireAuthentication)

  function requireAuthentication(event, toState) {
    let stateRequireLogin = toState.name !== 'login' && toState.name !== 'signup'
    let isAuthenticated = $auth.isAuthenticated()

    if (stateRequireLogin && !isAuthenticated) {
      event.preventDefault()
      $state.go('login')
    }
  }
}
