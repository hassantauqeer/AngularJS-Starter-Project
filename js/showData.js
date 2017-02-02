app.controller('showdata', function($scope, service){
  $scope.readData = function(){
    service.readData();
    console.log(service.mydata)
  // service.readData().then(function(user) {
  //   $scope.mydata = user;
  //   console.log($scope.mydata);
  // }).catch(function (err) {
  //   console.log("Error");
  // });
};
});

// app.controller('showdata', function($scope, service){
//   $scope.mydata = service.getData()
//     .then(function(user){
//       $scope.mydata = (user.data);
//       console.log($scope.mydata);
//   });
// });
