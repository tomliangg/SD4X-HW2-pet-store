# SD4X-HW2-pet-store
<p>This repo contains my personal work towards PennX's SD4X course - Programming for the Web with JavaScript </p>
<p>Below is the assignment description </p>
<hr>

<h3>Activity</h3>

The functions that you will implement in this assignment are all related to the operation of a pet store (as you’ll see later in the course, the SD4x instruction staff really likes animals!), where shoppers can purchase animals as pets.


In petstore.js, implement these functions as follows:

calculateFoodOrder: This function should calculate the total amount of pet food that the store should order for the upcoming week. The numAnimals parameter represents the number of animals in the store, and avgFood represents the average amount of food (in kilograms) eaten by each animal each week. The function should return the total amount of pet food that should be ordered for the upcoming week, or -1 if numAnimals or avgFood is less than 0 or non-numeric.

mostPopularDays: This function determines which day of the week had the most number of people visiting the pet store. If two or more days are tied for the highest amount of traffic, an array containing the days (in any order) should be returned. If the input is null or an empty array, the function should return null. The input is an array of Weekday objects, which are created using the prototype function defined toward the bottom of petstore.js. This function should return a string containing the name of the most popular day of the week if there is only one most popular day, and an array containing the names (as strings) of the most popular days if there are more than one that are most popular.

createAnimalObjects: Given three arrays of equal length containing information about a list of animals – where names[i], types[i], and breeds[i] all relate to the same, single animal – this function should return an array of Animal objects constructed from the information provided in the arrays. The parameter names represents the array of the animals’ names; types represents the array of the animals’ types (e.g. "Dog", "Cat", "Bird"); and breeds represents the array of the animals’ breeds. This function should return an array of Animal objects (which you can create using the prototype function at the bottom of petstore.js), each of which contains the animal’s information, or an empty array if the arrays’ lengths are unequal or zero, or if any array is null.

Your implementations are only expected to handle the “normal” operations of these functions, and any extra conditions listed above. You may think of or encounter other situations or inputs not described here, but you only need to consider the ones listed above for grading.

<h3>One more important note:</h3>

Please do not change the names or lists of parameters for any of the functions we have provided, as these will be used by our tests during grading. Also, please do not change the function prototypes for the Weekday, Item, or Animal classes, as those are used by the grader as well.

Be sure that all JavaScript is in petstore.js and that you have not created any additional files.

<h3>Helpful Hints</h3>

Be sure that you’re able to run the “helloworld()” function in your browser’s JavaScript console before trying to implement the other functions, so that you know you have a development environment in which to work.

For calculateFoodOrder, use the JavaScript Number function for converting a variable to its numeric form, and consider the isNaN function for determining whether the conversion was successful.

For mostPopularDays, remember that you can use the JavaScript console as a “REPL” to create variables – including objects – and then use them in invoking your functions. For instance, you can create a Weekday object using the JavaScript “new” keyword with the prototype function (review the lesson on functions if you don’t recall how to do that), and then create an empty array and then use the array’s “push” function to add objects to the array before calling mostPopularDays.

You can then use a similar approach in implementing createAnimalObjects when it comes to creating new values and putting them into an array.
