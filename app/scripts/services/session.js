'use strict';

angular.module('charityApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
