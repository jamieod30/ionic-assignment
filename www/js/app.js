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
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // abstract state so tabs can be reused by each page
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  
	// navigation for home page
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

	// navigation for foodlist page
  .state('tab.foodlist', {
      url: '/foodlist',
      views: {
        'tab-foodlist': {
          templateUrl: 'templates/tab-foodlist.html',
          controller: 'FoodlistCtrl'
        }
      }
    })
	
	// navigation for foodlist detail page
    .state('tab.foodlist-detail', {
      url: '/foodlist/:foodlistId',
      views: {
        'tab-foodlist': {
          templateUrl: 'templates/foodlist-detail.html',
          controller: 'FoodListDetailCtrl'
        }
      }
    })

	// navigation for calculatormenu page
  .state('tab.calculatormenu', {
    url: '/calculatormenu',
    views: {
      'tab-calculatormenu': {
        templateUrl: 'templates/tab-calculatormenu.html',
        controller: 'CalculatormenuCtrl'
      }
    }
  })
  
  // navigation for calculator page (not a sub page of tab therefore view:{} not needed)
    .state('calculator', {
    url: '/calculator',
    templateUrl: 'templates/calculator.html'
  })
  
	// navigation for bmi page (not a sub page of tab therefore view:{} not needed)
    .state('bmi', {
    url: '/bmi',
    templateUrl: 'templates/bmi.html'
  })
  
  // navigation for counter page (not a sub page of tab therefore view:{} not needed)
    .state('counter', {
    url: '/counter',
    templateUrl: 'templates/counter.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
