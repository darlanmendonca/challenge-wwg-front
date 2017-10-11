angular
  .module('app')
  .controller('PlacesController', PlacesController)

function PlacesController(list) {
  this.list = list
}
