'use strict';

app.factory('UserService',function($compile, $templateRequest, $http) {
  return {
    getSession: (tokenObj, $scope) => {
      return $http.post('http://localhost:9095/session', tokenObj)
        .then(res => {
            //TODO handle session id to Local Storage.
            console.log('Authorized!');

            location.hash = '';

            $('#auth').remove();
            $templateRequest('templates/main-page.html').then(html => angular.element($('body')).append($compile(html)($scope)));
            return res.data;
            
          },
          err => {
            //TODO Handle unsuccessful auth.
            err;
            console.log('Authorization failed!');

            //TODO location.hash.replace('#',''); - extract params using this.
            location.hash = '';
          });
    },
      removeUser: (id) => {
          return $http.delete('http://localhost:9095/' + id)
              .then(() => {
                  err => {
                      console.error('User deletion failed');

                      return $q.reject(err);
                  }
              });
      }
  };
});