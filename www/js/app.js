angular.module('calorific', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	
		.state('home', {
		  url: "/home",
		  templateUrl: "index.html"
		})
		
		.state('app', {
		  url: "/app",
		  templateUrl: "app.html"
		});
		
		// if none of the above states are matched use this as the fallback
	$urlRouterProvider.otherwise('/home');
});