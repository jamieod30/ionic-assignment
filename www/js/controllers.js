angular.module('Calorie.controllers', [])

.controller('HomeCtrl', function($scope) {})

//retrieves all from Foodlist
.controller('FoodlistCtrl', function($scope, FoodList) {
  $scope.foodlist = FoodList.all();
  $scope.remove = function(foodlist) {
    FoodList.remove(foodlist);
  }
})

//count starts at 0
.controller("CounterCtrl", function($scope) {
	$scope.count = 0;
	})
	
.controller("CalculatorCtrl", function($scope) {})

// gets information based on foodlistId
.controller('FoodListDetailCtrl', function($scope, $stateParams, FoodList) {
  $scope.foodlist = FoodList.get($stateParams.foodlistId);
})

.controller('CalculatormenuCtrl', function($scope) {});
