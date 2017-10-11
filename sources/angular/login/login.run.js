angular
  .module('app')
  .run(LoginRun)

function LoginRun($rootScope, $state, $auth) {
  $rootScope.$on('$stateChangeStart', logoutInLoginState)
  $rootScope.$on('$stateChangeStart', requireAuthentication)
  $state.go('login')

  function logoutInLoginState(event, toState) {
    if (toState.name === 'login') {
      $auth.logout()
    }
  }

  function requireAuthentication(event, toState) {
    let stateRequireLogin = toState.name.startsWith('app.')
    let isAuthenticated = $auth.isAuthenticated()

    if (stateRequireLogin && !isAuthenticated) {
      event.preventDefault()
      $state.go('login')
    }
  }
}
