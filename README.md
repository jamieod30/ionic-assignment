# Mobile Application Development Project 
## Jamie O'Donovan Student Number: G00272510
This application was created to meet the specifications laid out as part of the mobile programming module for GMIT Higher Diploma on Science in Computing. The app is developed using Ionic Framework and Cordova.

##Summary of Requirements
Create a cross-platform mobile application that allows you to keep track of calories. The app could display the calories in common everyday foods, let users input the amount of calories they are consuming or both. Extra functionality beyond these ideas is welcome.

##Summary of app
The app was created to provide a range of functionality while not being cluttered. The user can find out there recommended daily calorie intake calculate their BMI and count up the calories they have eaten each day via states linked in the menu page. They can search also through the responsive food list. Selecting a food on the list will bring you to a details page which shows how many calories are in the food for a specific weight. It will also give two links to healthy recipes containing that food on the website www.cookinglight.com. Beneath each link the amount of people the recipe serves and the calories per serving are displayed.

##Navigation
The app allows navigation through its three main pages via tab icons. These pages are the home page, the menu page and the food list page. Navigation from the menu page is done through button-links within list items. Each state linked from the menu page contains a footer with a back and home button for easy intuitive navigation. Navigation from the food list page is done via the list items themselves.  The food list is easily returned to via a food list arrow located at the top left of the screen within the food list detail pages.  A diagram detailing the navigation menu is available in the img folder within the project

##Mechanics
The BMI calculator formula is written in-line with the contents of the height, weight and BMI input fields being given the ng-model height, weight and BMI respectively. The BMI button was given the ng-click function which when clicked carries out the formula weight/(height*height)*10000 and assigns it to BMI. The reset button is also given an on click function to reset each field to 0.
The daily counter is a simple counter function which reads in each field and adds them together when the Calculate button is clicked. This state also has a reset button which sets all fields to 0.
The food list page reads in the image and the name from the services.js file by the angular loop ng-repeat based on id. 
Sliding a list item to the left allows you the option to delete any item in the list.
Selecting an item on the list will return all information stored in services.js on that item. This is also done through an ng-repeat loop. The links to the recipes are basic hyperlinks.

##Acknowledgements
www.cookinglight.com was used to find out all calorie amounts and is linked to within my app. Some typography styles have been taken and modified from the link http://3.7designs.co/blog/2008/06/10-examples-of-beautiful-css-typography-and-how-they-did-it/. The table design has been modified from the design at this link http://johnsardine.com/freebies/dl-html-css/simple-little-tab/. All images have been taken from online sources.

##Assignment Categories
Comments: I feel the code has been extensively commented and the readme file gives good detail into what the app does and how it works.
Execution and performance: The application runs on ionic serve with no problems. The application is very quick and responsive due to the easy to navigation layout and use of ng-repeat to quickly load the many images in the food list.
User interface: I feel the minimalist design of the app is very appealing. I find button outlines and white space to be much more attractive than the sharp colours provided by the ionic framework such as positive and balanced.
Difficulty: Using tabs to navigate between main pages provided easy traversal of the app. Filling the food list side menu with a loop as well as the dynamic hyperlinks provide a higher level of functionality.
Source code management: The git repository has been initialised. Over 50 commits have been made. Two branches were used during development, branch and master. The project is freely available on GitHub.
