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
  $stateProvider.state(formpage);
  $stateProvider.state(tablepage);
})
