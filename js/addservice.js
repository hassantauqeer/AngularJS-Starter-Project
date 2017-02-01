app.service('service', function($http){
this.readData = function(){
  return $http({
    method: 'GET',
    url: 'jsons/hassan.json'
  }).then(function (data) {
    return data.data;
  });
};
var mydata;
this.giveData = function(){
  this.readData().then(function(user) {
    this.mydata = user;
      // console.log("No Error");
       console.log(this.mydata);
      // return user;
  });
};
this.getData = function() {
  return this.mydata;
}

});



// app.service('service', function($http, $q){
//   var outData={};
//   this.getData = function() {
//      if (this.outData === undefined) {
//      var deferred = $q.defer();
//      $http.get('jsons/hassan.json')
//         .then(function(data){
//           this.outData = data;
//           deferred.resolve(data);
//         },
//         function(err) {
//           deferred.reject(err);
//         });
//      return deferred.promise;
//     }
//     else {
//         return this.outData;
//     }
//  }
//
//  this.giveData = function(){
//    return this.outData;
//  }
// });
