angular
  .module('app')
  .config(AuthConfig)

function AuthConfig($authProvider) {
  $authProvider.loginUrl = '//localhost:4000/users/authenticate'
  $authProvider.authHeader = 'Authorization'
  $authProvider.tokenType = 'Bearer'
  $authProvider.authToken = ''
  $authProvider.storageType = 'localStorage'
}
