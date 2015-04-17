// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('esblighting', ['ionic', 'esblighting.controllers', 'esblighting.services'])

.directive('ebslightingCard', function() {
    return {
        restrict: 'E',
        template: '<div class="item item-divider">{{item.formattedDate | date:\'EEE, MMM d, yyyy\'}}</script></div><div class="item item-text-wrap"><p>{{item.color}}</p><p>{{item.occasion}}</p></div>',
    }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.today', {
    url: '/today',
    views: {
      'tab-today': {
        templateUrl: 'templates/tab-today.html',
        controller: 'TodayCtrl'
      }
    }
  })

  .state('tab.upcoming', {
      url: '/upcoming',
      views: {
        'tab-upcoming': {
          templateUrl: 'templates/tab-upcoming.html',
          controller: 'UpcomingCtrl'
        }
      }
    })

  .state('tab.all', {
    url: '/all',
    views: {
      'tab-all': {
        templateUrl: 'templates/tab-all.html',
        controller: 'AllCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/today');

});


