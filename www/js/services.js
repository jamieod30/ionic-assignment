angular.module('Calorie.services', [])

.factory('FoodList', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var foodlist = [{
    id: 0,
    name: 'Apple',
    image: 'https://imagem.biz/wp-content/uploads/2014/11/ma%C3%A7%C3%A3-argentina.jpg',
	quantity: ' medium 140g',
	calories: ' 81 calories',
	recipe: 'Fresh Apple Salsa',
	link: 'http://www.myrecipes.com/recipe/fresh-apple-salsa',
	serves: ' 12',
	linkcalories: ' 21',
	recipeb: 'Spiced Pork Tenderloin with Sautéed Apples',
	linkb: 'http://www.myrecipes.com/recipe/spiced-pork-tenderloin-with-sauted-apples',
	servesb: ' 4',
	linkbcalories: ' 234'
  }];

  return {
    all: function() {
      return foodlist;
    },
    remove: function(foodlist) {
      foodlist.splice(foodlist.indexOf(foodlist), 1);
    },
    get: function(foodlistId) {
      for (var i = 0; i < foodlist.length; i++) {
        if (foodlist[i].id === parseInt(foodlistId)) {
          return foodlist[i];
        }
      }
      return null;
    }
  };
});
