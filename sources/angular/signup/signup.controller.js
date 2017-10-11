angular
  .module('app')
  .controller('SignupController', SignupController)

function SignupController(data, $state) {
  this.data = data

  this.save = save

  function save() {
    this.data
      .save()
      .then(redirectToPlaces)

    function redirectToPlaces() {
      $state.go('places')
    }
  }
}
