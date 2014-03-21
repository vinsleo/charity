'use strict';

angular.module('charityApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      $scope.superheros = [
      	{"img":"mario.png", "name":"Mario", "desc":"Buy Mario! He's not that great a superhero but he's a really great plumber", "price": 34.99, "_id": 1},
      	{"img":"superman.jpg", "name":"Superman", "desc":"Traditional superhero, flys and all that. Also comes with a suit", "price": 49.85, "_id": 2},
      	{"img":"minion.jpg", "name":"Minion", "desc":"Not sure if he's a superhero, haven't seen the film", "price": 3.50, "_id": 3},
      	];


      	// $scope.total = _.pluck($scope.superheros, "price")
    });
  });
