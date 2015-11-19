var app = angular.module("dbApp");

app.controller("overview", function($scope, $http,session) {
    var user = session.get("user");
    
 $http.get('/api/profile').then(function(response){
    $scope.liste = response.data.profiles;
   
    
    if($scope.liste[0].username==user){
        
        $scope.nickname = user + "-" + $scope.liste[0].nickname;
        $scope.picture = "../" + $scope.liste[0].profileImage;
    }
    else{
        $scope.nickname = user + "-" + $scope.liste[1].nickname;
        $scope.picture = "../" + $scope.liste[1].profileImage;
    }
 })  

});