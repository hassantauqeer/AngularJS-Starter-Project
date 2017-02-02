app.controller('adddata', function($scope, service){
  $scope.addData = function(x) {
    service.readData()
    .then(function(user) {
      this.mydata = user;
      return user;
  });
  };
});
