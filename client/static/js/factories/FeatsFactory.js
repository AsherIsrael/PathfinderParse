pathApp.factory("FeatsFactory", ["$http", function($http){
    var factory = {};
    var feats = [];

    factory.index = function(callback){
        $http.get("/feats").then(function(results){
            console.log(results);
            feats = results.data;
            callback(feats);
        })
    }

    return factory
}])