pathApp.controller("FeatsController", ["FeatsFactory", function(FeatsFactory){
    var that = this;
    FeatsFactory.index(function(data){
        that.feats = data;
    })
}])