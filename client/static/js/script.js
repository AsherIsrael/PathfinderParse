


var pathApp = angular.module("pathApp", ["ngRoute"]);

pathApp.config(function($routeProvider){
    $routeProvider
        .when("/feats", {
            templateUrl: "static/partials/feats.html"
        }).otherwise({
            redirectTo: "/feats"
        })
})