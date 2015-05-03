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
  }, {
    id: 1,
    name: 'Banana',
    image: 'http://globe-views.com/dcim/dreams/bananas/bananas-03.jpg',
	quantity: ' medium 100g',
	calories: ' 105 calories',
	recipe: 'Classic Banana Bread',
	link: 'http://www.myrecipes.com/recipe/classic-banana-bread',
	serves: ' 14',
	linkcalories: ' 187',
	recipeb: 'Banana Split Sundaes',
	linkb: 'http://www.myrecipes.com/recipe/banana-split-sundaes',
	servesb: ' 8',
	linkbcalories: ' 296'
  }, {
    id: 2,
    name: 'Pear',
    image: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Pear2.jpg?beb304',
	quantity: ' medium 170g',
	calories: ' 98 calories',
	recipe: 'Honey Wheat Pizza with Pear-Prosciutto Salad',
	link: 'http://www.myrecipes.com/recipe/honey-wheat-pizza-pear',
	serves: ' 6',
	linkcalories: ' 393',
	recipeb: 'Peppered Pork and Pears',
	linkb: 'http://www.myrecipes.com/recipe/peppered-pork-pears',
	servesb: ' 4',
	linkbcalories: ' 259'
  }, {
    id: 3,
    name: 'Carrot',
    image: 'https://plus.maths.org/content/sites/plus.maths.org/files/articles/2011/paraconsistency/carrot.jpg',
	quantity: ' medium 60g',
	calories: ' 31 calories',
	recipe: 'Basic Beef Stew with Carrots and Mushrooms',
	link: 'http://www.myrecipes.com/recipe/basic-beef-stew-with-carrots-mushrooms',
	serves: ' 8',
	linkcalories: ' 303',
	recipeb: 'Crab Cocktail with Parmesan Chips',
	linkb: 'www.myrecipes.com/recipe/crab-cocktail-with-parmesan-chips',
	servesb: ' 2',
	linkbcalories: ' 128'
  }, {
    id: 4,
    name: 'Cauliflower',
    image: 'http://metreset.com/wp-content/uploads/2015/04/Cauliflower.jpg',
	quantity: ' 100g',
	calories: '25 calories',
	recipe: 'Seared Scallops with Cauliflower Puree',
	link: 'http://www.myrecipes.com/recipe/seared-scallops-with-puree',
	serves: ' 4',
	linkcalories: ' 232',
	recipeb: 'Cauliflower and Red Pepper Chowder',
	linkb: 'http://www.myrecipes.com/recipe/cauliflower-red-pepper-chowder',
	servesb: ' 5',
	linkbcalories: ' 168'
  }, {
    id: 5,
    name: 'Cucumber',
    image: 'https://www.organicfacts.net/wp-content/uploads/2013/06/Cucumber.jpg?beb304',
	quantity: ' 100g',
	calories: ' 15 calories',
	recipe: 'Curried Quinoa Salad with Cucumber Mint Raita',
	link: 'http://www.myrecipes.com/recipe/curried-quinoa-salad-with-cucumber-mint-raita',
	serves: ' 6',
	linkcalories: ' 268',
	recipeb: 'Cucumber Salad',
	linkb: 'http://www.myrecipes.com/recipe/cucumber-salad-0',
	servesb: ' 4',
	linkbcalories: ' 83'
  }, {
    id: 6,
    name: 'Mushrooms',
    image: 'http://www.bestinseason.ie/files/2009/06/pic_mushrooms1.jpg',
	quantity: ' 100g',
	calories: ' 22 calories',
	recipe: 'Wild Mushroom Pastitsio',
	link: 'http://www.myrecipes.com/recipe/wild-mushroom-pastitsio',
	serves: ' 6',
	linkcalories: ' 364',
	recipeb: 'Mushroom Bolognese',
	linkb: 'http://www.myrecipes.com/recipe/mushroom-bolognese',
	servesb: ' 6',
	linkbcalories: ' 344'
  }, {
    id: 7,
    name: 'Potato',
    image: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/9/24/1411574454561/03085543-87de-47ab-a4eb-58e7e39d022e-620x372.jpeg',
	quantity: ' 100g',
	calories: ' 93 calories',
	recipe: 'Garlicky Roasted Potatoes with Herbs',
	link: 'http://www.myrecipes.com/recipe/garlicky-roasted-potatoes-with-herbs',
	serves: ' 4',
	linkcalories: ' 195',
	recipeb: 'Cajun Stuffed Potatoes',
	linkb: 'http://www.myrecipes.com/recipe/cajun-stuffed-potatoes',
	servesb: ' 6',
	linkbcalories: ' 451'
  }, {
    id: 8,
    name: 'Tomato',
    image: 'http://www.moffatcan.org/shop/wp-content/uploads/2014/09/did-someone-say-tomato-pill-2.jpg',
	quantity: ' 100g',
	calories: ' 18 calories',
	recipe: 'Baked Tomatoes with Quinoa, Corn, and Green Chiles',
	link: 'http://www.myrecipes.com/recipe/baked-tomatoes-2',
	serves: ' 6',
	linkcalories: ' 320',
	recipeb: 'Pasta with Roasted Tomatoes and Garlic',
	linkb: 'http://www.myrecipes.com/recipe/pasta-roasted-tomatoes',
	servesb: ' 4',
	linkbcalories: ' 417'
  }, {
    id: 9,
    name: 'Cabbage',
    image: 'http://kleberly.com/data_images/wallpapers/3/261648-cabbage.jpg',
	quantity: ' 100g',
	calories: ' 24 calories',
	recipe: 'Beer-Braised Chicken Tacos with Cabbage Slaw',
	link: 'http://www.myrecipes.com/recipe/beer-braised-chicken-tacos',
	serves: ' 4',
	linkcalories: ' 386',
	recipeb: 'Seared Scallops with Bacon, Cabbage, and Apple',
	linkb: 'http://www.myrecipes.com/recipe/seared-scallops-bacon-cabbage',
	servesb: ' 4',
	linkbcalories: ' 201'
  }, {
    id: 10,
    name: 'Leek',
    image: 'http://whatscookingamerica.net/Soup/Leeks.jpg',
	quantity: ' 100g',
	calories: ' 64 calories',
	recipe: 'Braised Leeks and Mushrooms',
	link: 'http://www.myrecipes.com/recipe/braised-leeks-mushrooms',
	serves: ' 4',
	linkcalories: ' 144',
	recipeb: 'Potato-Leek Chowder',
	linkb: 'http://www.myrecipes.com/recipe/potato-leek-chowder',
	servesb: ' 6',
	linkbcalories: ' 227'
  }, {
    id: 11,
    name: 'Tuna',
    image: 'http://www.naturallyintense.net/blog/wp-content/uploads/2011/03/iStock_000013214167XSmall.jpg',
	quantity: ' 100g',
	calories: ' 116 calories',
	recipe: 'Coriander-Crusted Tuna with Black Bean Salsa',
	link: 'http://www.myrecipes.com/recipe/coriander-crusted-tuna-with-black-bean-salsa',
	serves: ' 4',
	linkcalories: ' 356',
	recipeb: 'Summer Salad of Seared Tuna, Lima Beans, and Tomatoes',
	linkb: 'http://www.myrecipes.com/recipe/summer-salad-of-seared-tuna-lima-beans-tomatoes',
	servesb: ' 6',
	linkbcalories: ' 334'
  }, {
    id: 12,
    name: 'Crab',
    image: 'http://www.nicehair.org/wp-content/uploads/2013/03/crab-meat.jpg',
	quantity: ' 100g',
	calories: ' 84 calories',
	recipe: 'Crab and Celery Root Rémoulade',
	link: 'http://www.myrecipes.com/recipe/crab-celery-root-remoulade',
	serves: ' 12',
	linkcalories: ' 70',
	recipeb: 'Crab Cakes',
	linkb: 'http://www.myrecipes.com/recipe/crab-cakes-1',
	servesb: ' 6',
	linkbcalories: ' 140'
  }, {
    id: 13,
    name: 'Salmon',
    image: 'http://canyoufreeze.com/wp-content/uploads/2014/10/cooked-salmon.jpg',
	quantity: ' 100g',
	calories: ' 183 calories',
	recipe: 'Smoked Salmon and Wheat Berry Salad',
	link: 'http://www.myrecipes.com/recipe/salmon-wheat-berry-salad',
	serves: ' 4',
	linkcalories: ' 389',
	recipeb: 'Grilled Salmon Caesar Salad',
	linkb: 'http://www.myrecipes.com/recipe/grilled-salmon-caesar-salad',
	servesb: ' 4',
	linkbcalories: ' 271'
  }, {
    id: 14,
    name: 'Shrimp',
    image: 'http://upload.wikimedia.org/wikipedia/commons/6/60/NCI_steamed_shrimp.jpg',
	quantity: ' 100g',
	calories: ' 106 calories',
	recipe: 'Seviche-Style Shrimp and Avocado Tacos',
	link: 'http://www.myrecipes.com/recipe/seviche-style-shrimp-avocado-tacos',
	serves: ' 4',
	linkcalories: ' 261',
	recipeb: 'Spanish-Style Shrimp with Garlic',
	linkb: 'http://www.myrecipes.com/recipe/spanish-style-shrimp-with-garlic',
	servesb: ' 4',
	linkbcalories: ' 161'
  }, {
    id: 15,
    name: 'Vanilla Ice Cream',
    image: 'http://thearcticscoop.com/wp-content/uploads/2014/07/3cones.jpg',
	quantity: ' 100g',
	calories: ' 207 calories',
	recipe: 'Pumpkin-Vanilla Ice Cream Sandwiches',
	link: 'http://www.myrecipes.com/recipe/pumpkin-vanilla-ice-cream-sandwiches',
	serves: ' 6',
	linkcalories: ' 272',
	recipeb: 'Broiled Pineapple with Bourbon Caramel over Vanilla Ice Cream',
	linkb: 'http://www.myrecipes.com/recipe/broiled-pineapple-with-bourbon',
	servesb: ' 6',
	linkbcalories: ' 309'
  }, {
    id: 16,
    name: 'Cheddar Cheese',
    image: 'http://images.wisegeek.com/cheddar-cheese.jpg',
	quantity: ' 100g',
	calories: ' 403 calories',
	recipe: 'Cheddar Cheese Sauce',
	link: 'http://www.myrecipes.com/recipe/cheddar-cheese-sauce',
	serves: ' 8',
	linkcalories: ' 37',
	recipeb: 'Cheddar Black Pepper Biscuits',
	linkb: 'http://www.myrecipes.com/recipe/cheddar-black-pepper-biscuits',
	servesb: ' 18',
	linkbcalories: ' 86'
  }, {
    id: 17,
    name: 'Feta cheese',
    image: 'http://cdn.shopify.com/s/files/1/0181/6997/products/Stoney_Hill_Sheeps_Feta_large.jpg?v=1419899153',
	quantity: ' 100g',
	calories: ' 264 calories',
	recipe: 'Feta Spinach Tarts',
	link: 'http://www.myrecipes.com/recipe/feta-spinach-tarts',
	serves: ' 12',
	linkcalories: ' 62',
	recipeb: 'Tomato and Cucumber Salad with Feta',
	linkb: 'http://www.myrecipes.com/recipe/tomato-cucumber-salad-with-feta',
	servesb: ' 4',
	linkbcalories: ' 54'
  }, {
    id: 18,
    name: 'Mozzarella cheese',
    image: 'http://www.menshealth.com/mhlists/cms/uploads/1/mozzarella-cheese-edited.jpg',
	quantity: ' 100g',
	calories: ' 300 calories',
	recipe: 'Baked Mozzarella Bites',
	link: 'http://www.myrecipes.com/recipe/baked-mozzarella-bites',
	serves: ' 4',
	linkcalories: ' 91',
	recipeb: 'Garlic Flatbreads with Smoked Mozzarella and Tomato Vinaigrette',
	linkb: 'http://www.myrecipes.com/recipe/garlic-flatbreads-with-smoked-mozzarella-tomato-vinaigrette',
	servesb: ' 12',
	linkbcalories: ' 139'
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
