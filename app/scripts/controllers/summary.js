'use strict';

angular.module('charityApp')
  .controller('SummaryCtrl', function ($scope, $http, $routeParams) {

	  var superheros = [
	  	{"img":"mario.png", "name":"Mario", "desc":"Buy Mario! He's not that great a superhero but he's a really great plumber", "price": 34.99, "_id": 1},
	  	{"img":"superman.jpg", "name":"Superman", "desc":"Traditional superhero, flys and all that. Also comes with a suit", "price": 49.85, "_id": 2},
	  	{"img":"minion.jpg", "name":"Minion", "desc":"Not sure if he's a superhero, haven't seen the film", "price": 3.50, "_id": 3},
	  	];

	  	var hero = _.findWhere(superheros, {_id: parseInt($routeParams.id)});
	  	$scope.hero = hero;
	  	$scope.total = Math.ceil(hero.price);
	  	$scope.difference = Math.round(($scope.total - hero.price)*100)/100
	  	console.log(hero)
  });
