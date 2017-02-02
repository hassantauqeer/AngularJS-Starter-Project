app.service('service', function($http){
  parent = this;

this.readData = function(){
  return $http({
    method: 'GET',
    url: 'jsons/hassan.json'
  }).then(function (data) {
    parent.mydata = data.data;
    return data.data;
  });
};

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
