angular
  .module('app')
  .config(ApiConfig)

function ApiConfig(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:4000')
}
