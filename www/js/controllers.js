angular.module('Calorie.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('FoodlistCtrl', function($scope, FoodList) {
  $scope.foodlist = FoodList.all();
  $scope.remove = function(foodlist) {
    FoodList.remove(foodlist);
  }
})

.controller("CounterCtrl", function($scope) {
	$scope.count = 0;
	})
	
.controller("CalculatorCtrl", function($scope) {})

.controller('FoodListDetailCtrl', function($scope, $stateParams, FoodList) {
  $scope.foodlist = FoodList.get($stateParams.foodlistId);
})

.controller('CalculatormenuCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
