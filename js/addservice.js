app.factory('addservice', function(){
  return {
    processdata: function(user) {
      $scope.mydata.push(user);
      return mydata;
    }
  }
})
