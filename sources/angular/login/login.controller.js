angular
  .module('app')
  .controller('LoginController', LoginController)

function LoginController($auth, $state) {
  this.credentials = {}

  this.authenticate = authenticate

  function authenticate() {
    $auth
      .login(this.credentials)
      .then(redirectToPlaces)
      .catch(unauthorized)

    function redirectToPlaces() {
      $state.go('places')
    }

    function unauthorized(error) {
      alert('O usuário ou senha que você digitou não coincide com nenhum usuário cadastrado.')
    }
  }
}
