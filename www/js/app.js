// Ionic Calorie App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'Calorie' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'Calorie.services' is found in services.js
// 'Calorie.controllers' is found in controllers.js
angular.module('Calorie', ['ionic', 'Calorie.controllers', 'Calorie.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.foodlist', {
      url: '/foodlist',
      views: {
        'tab-foodlist': {
          templateUrl: 'templates/tab-foodlist.html',
          controller: 'FoodlistCtrl'
        }
      }
    })
	
    .state('tab.foodlist-detail', {
      url: '/foodlist/:foodlistId',
      views: {
        'tab-foodlist': {
          templateUrl: 'templates/foodlist-detail.html',
          controller: 'FoodListDetailCtrl'
        }
      }
    })

  .state('tab.calculatormenu', {
    url: '/calculatormenu',
    views: {
      'tab-calculatormenu': {
        templateUrl: 'templates/tab-calculatormenu.html',
        controller: 'CalculatormenuCtrl'
      }
    }
  })
  
    .state('calculator', {
    url: '/calculator',
    templateUrl: 'templates/calculator.html'
  })
  
    .state('bmi', {
    url: '/bmi',
    templateUrl: 'templates/bmi.html'
  })
  
    .state('counter', {
    url: '/counter',
    templateUrl: 'templates/counter.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
