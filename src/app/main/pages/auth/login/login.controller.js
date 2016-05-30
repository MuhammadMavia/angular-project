(function () {
  'use strict';

  angular
    .module('app.pages.auth.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($mdToast) {
    var vm = this;
    vm.doLogin = function () {
      $.ajax({
          type: 'POST',
          url: 'https://www.afterbanks.com/apiapp/login/',
          data: vm.user
        }
      ).then(
        function (response) {
          response = response.replace('"nextUrl', '"nextUrl"');
          response = JSON.parse(response);
          if (response.loginResult == 1) {
            location.assign(response.nextUrl);
          }
          else {
            $mdToast.show(
              $mdToast.simple()
                .textContent(response.reason)
                .position('top right')
                .hideDelay(3000)
            );
          }
          console.log(response);
        });
    }
  }
})
();
