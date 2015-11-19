
var app = angular.module("dbApp");
app.controller('contact', function ($scope, $window,$http) {

  $http.get('/api/location')
  .then(function(response) {
        $scope.tabs=response.data.locations;
   }, function() {
        console.log("SORRY");
   });

  $http.get('/api/category')
  .then(function(response) {
        $scope.cats=response.data.categories;
   }, function() {
        console.log("SORRY");
   });

  $scope.mytime = new Date();
  $scope.rand=Math.floor(Math.random()*9999999999+1000000000);
  $scope.rate = 5;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.mailurl = function(value) {
    return "mailto:"+value;
  };

   $scope.priority = function(value) {
    //console.log(value);
    if(value<4)
      return "Low";
    else if(value>=4 && value<7)
      return "Middle";
    else
      return "High";
  };

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
  
});