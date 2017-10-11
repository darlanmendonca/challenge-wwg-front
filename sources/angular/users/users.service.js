angular
  .module('app')
  .service('Users', UsersService)

function UsersService(Restangular) {
  const resource = Restangular.service('users')

  this.create = create

  function create() {
    return resource.one()
  }
}
