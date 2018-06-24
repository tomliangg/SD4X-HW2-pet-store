
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    if ((Number(numAnimals) >= 0) && (Number(avgFood) >= 0)) {
        return (numAnimals * avgFood);
    } else {
        return -1;
    }
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    if ((week == null) || (week.length==0)) return null;
    var maxTraffic = week[0].traffic; // initialize the max traffic

    // use a for loop to find the max traffic
    for (var day of week) {
        if (day.traffic > maxTraffic) {
            maxTraffic = day.traffic;
        }
    }

    var dayArr = [];
    var i=0;
    for (var day of week) {
        if (day.traffic == maxTraffic) {
            dayArr[i++] = day.name;
        }
    }
    if (dayArr.length==1) return dayArr[0];
    return dayArr;
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    if ((names==null) || (types==null) || (breeds==null)) return [];
    else if ((names.length==types.length) && (names.length==breeds.length) && (names.length!=0)) {
        var arrAnimal = [];
        for (var i=0; i<names.length; i++) {
            arrAnimal[i] = new Animal(names[i], types[i], breeds[i]);
        }
        return arrAnimal;
    } else {
        return [];
    }
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}






/****************************/
/********** TESTING *********/
/****************************/

var assert = require("assert");

describe('calculateFoodOrder', ()=> {
  it('calculateFoodOrder should calculate amount of food to order when inputs are positive numbers', () => {
    var test = calculateFoodOrder(10,  3);
    var expected = 30;
    assert(test === expected);
  });
  it('calculateFoodOrder should return -1 when numAnimals < 0', () => {
    var test = calculateFoodOrder(-1,  1);
    var expected = -1;
    assert(test === expected);
  });
  it('calculateFoodOrder should return -1 when numAnimals is non-numeric', () => {
    var test = calculateFoodOrder('dog',  1);
    var expected = -1;
    assert(test === expected);
  });
  it('calculateFoodOrder should return -1 when avgFood < 0', () => {
    var test = calculateFoodOrder(1,  -1);
    var expected = -1;
    assert(test === expected);
  });
  it('calculateFoodOrder should return -1 when avgFood is non-numeric', () => {
    var test = calculateFoodOrder(1,  'dog');
    var expected = -1;
    assert(test === expected);
  });
});

describe('mostPopularDays', ()=> {
  it('mostPopularDays should return day with maximal traffic when one day has most traffic', () => {
    var day1 = new Weekday("Sunday", 100);
    var day2 = new Weekday("Monday", 200);
    var day4 = new Weekday("Wednesday", 300);
    var day3 = new Weekday("Tuesday", 150);
    var week = [day1, day2, day3, day4];
    var expected = "Wednesday";
    var test = mostPopularDays(week);
    assert(test === expected);
  });
  it('mostPopularDays should return an array of days when more than one day has most popular traffic',
    () => {
      var day1 = new Weekday("Sunday", 100);
      var day2 = new Weekday("Monday", 300);
      var day4 = new Weekday("Wednesday", 300);
      var day3 = new Weekday("Tuesday", 150);
      var week = [day1, day2, day3, day4];
      var test = mostPopularDays(week);
      assert(test.length == 2);
      assert(test.indexOf("Monday") != -1);
      assert(test.indexOf("Wednesday") != -1);
      //assert(test.indexOf("Sunday") == -1);
      //assert(test.indexOf("Tuesday") == -1);
    });
  it('mostPopularDays should return null when input array is empty',
    () => {
      var week = [];
      var test = mostPopularDays(week);
      assert(test === null);
    });
  it('mostPopularDays should return null when input array is null',
    () => {
      var test = mostPopularDays(null);
      assert(test === null);
    });
});


describe('createAnimalObjects', () => {
  it('createAnimalObjects should return an array of one animal object when each array has one value',  () => {
    var animal1 = new Animal("Lola", "Dog", "Golden Retriever");
    var test = createAnimalObjects(["Lola"], ["Dog"], ["Golden Retriever"]);
    assert(test[0].name === animal1.name);
    assert(test[0].type === animal1.type);
    assert(test[0].breed === animal1.breed);
  });
  it('createAnimalObjects should return an array of two animal objects when each array has two values',  () => {
    var animal1 = new Animal("Lola", "Dog", "Golden Retriever");
    var animal2 = new Animal("Sprinkles", "Dog", "Pitbull");
    var test = createAnimalObjects(["Lola", "Sprinkles"], ["Dog", "Dog"], ["Golden Retriever", "Pitbull"]);
    assert(test[0].name === animal1.name);
    assert(test[0].type === animal1.type);
    assert(test[0].breed === animal1.breed);
    assert(test[1].name === animal2.name);
    assert(test[1].type === animal2.type);
    assert(test[1].breed === animal2.breed);
  });
  it('createAnimalObjects should return an empty array when input array lengths are unequal',  () => {
    var animal1 = new Animal("Lola", "Dog", "Golden Retriever");
    var test = createAnimalObjects(["Lola"], ["Dog", "Dog"], ["Golden Retriever"]);
    assert(test.length === 0);
  });
  it('createAnimalObjects should return an empty array when input array lengths are 0',  () => {
    var test = createAnimalObjects([], [], []);
    assert(test.length === 0);
  });
  it('createAnimalObjects should return an empty array when first input is null',  () => {
    var test = createAnimalObjects(null, ["Dog"], ["Beagle"]);
    assert(test.length === 0);
  });
  it('createAnimalObjects should return an empty array when second input is null',  () => {
    var test = createAnimalObjects(["Snoopy"], null, ["Beagle"]);
    assert(test.length === 0);
  });
  it('createAnimalObjects should return an empty array when third input is null',  () => {
    var test = createAnimalObjects(["Snoopy"], ["Dog"], null);
    assert(test.length === 0);
  });
})
