var app = angular.module("dbApp");
app.factory('authenticate', function($http, session) {
    var res;
    
    //console.log(user);
    // console.log(psw);
    
    return {
        getUser: function() {
            var user = session.get('user');
            var psw = session.get('psw');
            var promise = $http.post('/api/login', {
        userName: user,
        password: psw
    });
    promise.then(function(response) {
        res = response.data.authentication;

    }, function() {
        console.log("SORRY");
    });
            return res;
        }
    };
});
// 'use strict';
// angular.module('dbApp')
// .factory('authenticate',function($http, $state, session){
//     return{
//         login: function(data, scope){
//             var promise= $http.post('/api/login', data); //send data to login api
//             promise.then(function(response){
//                 //  scope.msgtxt='Correct information';
//                 //  console.log(response);
//                     session.set('user',"minh");
//                     $state.go('root.work');
//                 }, function(response){
//                     scope.msgtxt='incorrect information';  
//                     scope.user.password = "";
//                     $state.go('login');
//                 }                  
//             );
//         },
//         logout: function(){
//             session.destroy('user');
//             $state.go('login');
//         },
//         islogged:function(){
//             if(session.get('user')) return true;
//             else return false;  
//         }
//     };
// });
