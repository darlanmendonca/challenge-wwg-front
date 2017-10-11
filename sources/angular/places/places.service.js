angular
  .module('app')
  .service('Places', PlacesService)

function PlacesService(Restangular) {
  const resource = Restangular.service('places')

  this.list = list

  function list() {
    return resource.getList()
  }
}
