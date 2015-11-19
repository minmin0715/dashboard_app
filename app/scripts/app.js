'use strict';
angular.module('dbApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ui.router',
        'ui.bootstrap'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'login'
            })
            .state('root', {
                templateUrl: 'templates/root.html',
                controller: 'rootController',
                abstract: true
            })
            .state('root.overview', {
                url: '/root/overview',
                templateUrl: 'templates/overview.html',
                controller: 'overview'
            })
            .state('root.work', {
                url: '/root/work',
                templateUrl: 'templates/work.html',
                controller: 'work'
            })
            .state('root.contact', {
                url: '/root/contact',
                templateUrl: 'templates/contact.html',
                controller: 'contact'
            })
            .state('root.producer', {
                url: '/root/producer',
                templateUrl: 'templates/producer.html'
            });
    });
  //   .run(function ($rootScope, authenticate) {
  //   $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
  //     var requireLogin = toState.data.requireLogin;
      
  //     if (requireLogin && !authenticate.islogged()) {
  //       event.preventDefault();
  //       // get me a login modal!
  //     }
  // });
//});
