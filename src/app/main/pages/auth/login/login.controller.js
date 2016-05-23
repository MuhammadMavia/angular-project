(function () {
  'use strict';

  angular
    .module('app.pages.auth.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($http, $location) {
    var vm = this;
    vm.doLogin = function () {
      $location.path('/');
      console.log(vm.user);
      $http.post('https://www.afterbanks.com/apiapp/login/', vm.user).then(
        function (success) {
          console.log(success);
        },
        function (error) {
          console.log(error);
        })
    }
  }
})();
