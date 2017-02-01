var app = angular.module("myModule", ['ui.router']).config(function($stateProvider) {
  var formpage = {
    name: 'form',
    url: '/form',
    templateUrl: 'templates/form.html'
  }
  var tablepage = {
    name: 'table',
    url: '/table',
    templateUrl: 'templates/table.html'
  }
  var formedit = {
    name: 'formedit',
    url: '/form/:id',
    templateUrl: 'templates/form.html',
    controller: function ($scope, $stateParams) {
    }
  }
  var home = {
    name: 'home',
    url: '/',
    templateUrl: 'templates/login.html'
  }
  $stateProvider.state(formpage);
  $stateProvider.state(home);
  $stateProvider.state(formedit);
  $stateProvider.state(tablepage);
})
