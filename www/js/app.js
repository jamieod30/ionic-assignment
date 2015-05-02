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

  .state('tab.calculatormenu', {
    url: '/calculatormenu',
    views: {
      'tab-calculatormenu': {
        templateUrl: 'templates/tab-calculatormenu.html',
        controller: 'CalculatormenuCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
