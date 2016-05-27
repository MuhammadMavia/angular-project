(function () {
  'use strict';

  angular
    .module('app.pages.auth.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($http, $mdToast) {
    var vm = this;
    vm.doLogin = function () {
      var userData = {
        'username': vm.user.username,
        'password': vm.user.password
      };
      $.ajax({
          type: 'POST',
          url: 'https://www.afterbanks.com/apiapp/login/',
          data: userData
        }
      ).then(
        function (response) {
          if (response.indexOf('"loginResult": 1,') != -1) {
            location.assign('https://midomain.com/main/');
          }
          else  {
            $mdToast.show(
              $mdToast.simple()
                .textContent('Wrong username or password!')
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
