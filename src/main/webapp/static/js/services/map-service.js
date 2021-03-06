'use strict';

app.factory('MapService', ['$http', '$q', function ($http, $q) {
  return {
    create: (route) => {
      return $http.post('/routes', route)
        .then(res => res.data,
          err => {
            console.error('Route creating failed');

            return $q.reject(err);
          });
    },

    copyRoute: (id, friend_id) => {
      return $http.put('/routes/' + id, friend_id)
        .then(() => {
          },
          err => {
            console.error('Copy route failed');
            return $q.reject(err);
          });
    },

    remove: (id) => {
      return $http.delete('/routes/' + id)
        .then(() => {
          },
          err => {
            console.error('Route deletion failed');

            return $q.reject(err);
          });
    },

    update: (route) => {
      return $http.patch('/routes/' + route.id, route)
        .then(res => res.data,
          err => {
            console.error('Route updating failed');

            return $q.reject(err);
          });
    },

    fetchAll: () => {
      return $http.get('http://localhost:9095/routes')
        .then(res => res.data,
          err => {
            console.error('Route fetching failed');
            return $q.reject(err);
          });
    },

    fetch: (id) => {
      return $http.get('/routes/' + id)
        .then(res => res.data,
          err => {
            console.error('Route fetching failed');

            return $q.reject(err);
          });
    },

    like: (id) => {
      return $http.get('/routes/like/' + id)
        .then(res => res.data,
          err => {
            return $q.reject(err);
          });
    }
  };
}]);