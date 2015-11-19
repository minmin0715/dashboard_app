var app = angular.module("dbApp");

app.controller("login", function($scope, $window, $http, $state, session, authenticate) {
    $scope.key = function() {
        //alert('test');  
        $scope.one = {
            'opacity': '1'
        }
    };   
   // session.set("user", $scope.userName);
   // session.set("psw", $scope.password);
    $scope.reminder = true;
    $scope.login = function() {
        session.set("user", $scope.userName);
        session.set("psw", $scope.password);
        if (authenticate.getUser() === "success") {
           
            $state.go("root.overview");
            // $window.location.reload("root.overview");

        } else {
            // Not log the user in
            $scope.reminder = !$scope.reminder;
            console.log("error");
        }
    }

});
// angular.module('dbApp')
//     .controller('login', function($scope, authenticate) {
//         // console.log('Login state');
//         $scope.login = function(data) {
//             authenticate.login(data, $scope); //call login service
//         };

//     });
