var app = angular.module('CRUDapp', []);

app.controller("Mycontroller", function ($http, $rootScope) {
    $http.get("http://localhost:51473/api/ToutLesAvis").then(function (response) {
        $rootScope.myWelcome = response.data;
        console.log(response);

    });
});
app.controller("AddPlayerController", function ($scope) {
    $scope.message = "Enter your details";
    $scope.AddPlayer = function () {
        PlayerService.AddPlayerToDB($scope.player)
    }
}).factory("PlayerService", ['$http', function ($http) {
    var fac = {}
    fac.AddPlayerToDB = function () {
        $http.post("http://localhost:51473/api/posterUneDEmande", player).success(function (reponse) {
            alert(reponse.status);
        })
    }
    return fac;
}])