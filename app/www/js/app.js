angular.module('esblighting', ['ionic', 'ngCordova', 'esblighting.controllers', 'esblighting.services'])

.directive('ebslightingCard', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/list-item.html',
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
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/today');

});


