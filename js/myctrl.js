var app = angular.module('myModule').controller('myctrl', function($scope, $http, $log, $stateParams, $state){

  $scope.editData = function(x) {
    $state.go("formedit", {id: x.id})

  };

  $scope.delete = function(x){
    $scope.mydata.splice($scope.mydata.indexOf(x),1);
  };
});












//$scope.mydata = addservice.processdata(user);
//template: "<div ng-repeat='x in mydata track by $index'></div>";
