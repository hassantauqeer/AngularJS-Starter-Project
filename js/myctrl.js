var app = angular.module('myModule').controller('myctrl', function($scope, $http, $log, addservice){
  $http.get('jsons/hassan.json')
  .then(function(response) {
    $scope.mydata = response.data;
    $log.info($scope.mydata[0]);
  });
  $scope.addData = function(user) {
    $scope.mydata = addservice.processdata(user);
  }
  $scope.delete = function(x){
    $scope.mydata.splice($scope.mydata.indexOf(x),1)
  };
});
