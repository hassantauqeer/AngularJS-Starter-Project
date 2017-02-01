app.controller('showdata', function($scope, service){
  $scope.readData = function(){
  service.readData().then(function(user) {
    $scope.mydata = user;
      console.log("No Error");
      console.log($scope.mydata);
  }).catch(function (err) {
    console.log("Error");
  });
};
  $scope.showData = function() {
    return service.giveData();
  }
  $scope.mydata = service.giveData();
});

// app.controller('showdata', function($scope, service){
//   $scope.mydata = service.getData()
//     .then(function(user){
//       $scope.mydata = (user.data);
//       console.log($scope.mydata);
//   });
// });
