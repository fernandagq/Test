var myArray = [[1], [2], [3], 4];

var shoppingList = [["cereal", 3], ["bananas", 4], ["milk", 5]];

console.log("hello world");

console.log(myArray);


myArray.pop();

console.log(myArray);

//unsihft, adds an element to the beginning of the array
//pop, removes last element from the array
//shift, removes first elemnt of the array


var shiftedShoppingList = shoppingList.shift();

console.log(shiftedShoppingList);
console.log(shoppingList.shift());
console.log(shoppingList);

//functions are imporant for reusability 

function myReusableFunction() {
    console.log("hello world");
};

myReusableFunction()
myReusableFunction()
myReusableFunction()

//parameters are variables that act as placeholders for the values that are to be input to a function when it's called.

function functionWithArgs(a, b) {
    console.log(a - b);
};

functionWithArgs(4, 3);

//variabales defined outside a function have globle scope - can be seen anywhere in the js code.

var myGlobal = 10;

function fun1() {

    //oopsGlobal does not have var keyword. Normally, if you DO use a var keyword, since this is within a function, it will be scoped inside this function.
    //In this case, var keyword is not present, this variable is global automatically.

    oopsGlobal = 5;

}

function fun2() {

    var output = "";

    if (typeof myGlobal != "undefined") {

        output += "myGlobal: " + myGlobal;

    }

    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }

    console.log(output);

}

fun1();
fun2();


//it is possible to have global & local variables with the same name. If this happens, the local variable will take precedent over the global variable.

var outerWear = "T-Shirt";

function myOutfit() {


    return outerWear;
}

console.log(myOutfit());

//if retrun value in not specified, retrun value is undefined

var sum = 0;

function addthree() {

    sum = sum + 3;
}

console.log(addthree())

//functions with arguments

var changed = 0


function change(num) {
    return (num + 5) / 3;

}

changed = change(10);

//console.log(changed)

//queue is an abstract data structure where items are kept in order

function nextInLine(arr, item) {
    arr.push(item);
    //this function allows you to add an item to the array that's passed in and it will return first item on the list.
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));

console.log(nextInLine(testArr, 6));

console.log("After: " + JSON.stringify(testArr));

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }

    return "No, it's false";
}
console.log(ourTrueOrFalse(false));


function trueOrFalse(wasThatTrue) {

    if (wasThatTrue) {

        return "correct, it is true";
    }

    return "incorrect, untrue";

}

console.log(trueOrFalse(true));

//single = sign is the assignment operator, == compares two values regardless of their type, === strict comparison
function testingTrueFalseKnowledge(isItWorking) {
    if (isItWorking == 4) {
        return "yes, it is 4"
    }
    return "no, it's another number"
}

console.log(testingTrueFalseKnowledge("4"));

function testingGreaterOrEqual(val) {

    if (val >= 10) {
        return "value is greater than or equal to 10";
    }

    if (val <= 5) {
        return "value is less than or equal to 5";
    }

    return "value may not be numerical"
}

console.log(testingGreaterOrEqual("hello"))

//using && operators to test logic

function testingAndOperators(val) {
    if (val <= 50 && val >= 25) {

        return "yes, value is between 25 and 50";
    }
    return "no, value is not within expected range";

}

console.log(testingAndOperators(24))

//using OR operators in if statements b 

function testingOrOperators(valTwo) {
    if (valTwo == 10 || valTwo == 14) {
        return "value is either 10 or 14, correct";
    }
    return "value is neither 10 or 14";
}

console.log(testingOrOperators(12));

//else statements

function testElse(val3) {

    var result = "";

    if (val3 > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;
}

console.log(testElse(3));

// if you have multiple conditions that need to be addressed, use else if statements

function testElseIf(val4) {
    if (val4 > 10) {
        return "Greater than 10"
    } else if (val4 < 5) {

        return "Smaller than 5";

    } else {

        return "between 5 and 10"

    }


}

console.log(testElseIf(5));

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]

function golfScorer(par, strokes) {

    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScorer(3, 1));
console.log(golfScorer(4, 2));
console.log(golfScorer(4, 3));
console.log(golfScorer(1, 5));

//rather than using a chained switch statement, can use switch case

function changeInSwitch(val5) {
    var answer = "";

    switch (val5) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;

    }

    return answer;
}

console.log(changeInSwitch(3))

//default option in switch cases


function testingDefaultSwitch(val6) {
    var result4 = "";

    switch (val6) {
        case 1:
            result4 = "alpha";
            break;
        case 2:
            result4 = "beta";
            break;
        case 3:
            result4 = "gamma";
            break;
        default:
            result4 = "default response";
            break;

    }
    return result4;
}

console.log(testingDefaultSwitch(6));


//Multiple Identical Options in Switch Statements

function sequentialSizes(val9) {
    var answer8 = "";

    switch (val9) {
        case 1:
        case 2:
        case 3:
            answer8 = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer8 = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer8 = "high";
            break;

    }

    return answer8;

}

console.log(sequentialSizes(8));


//changing chained else if statements to a switch case:

function chainToSwitch(val10) {

    var answer10 = "";

    if (val10 === "bob") {
        answer10 = "Marley";
    } else if (val10 === 42) {
        answer10 = "The Answer"
    } else if (val10 === 1) {
        answer10 = "There is no #1";
    } else if (val10 === 99) {
        answer10 = "Missed me by this much!";
    } else if (val10 === 7) {
        answer10 = "Ate Nine";
    }

    return answer10;
}

//updated else if statement from above to:

function changeToSwitchOfficial(val11) {

    var answer11 = "";

    switch (val11) {
        case "bob":
            answer11 = "Marley";
            break;
        case 42:
            answer11 = "The Answer";
            break;
        case 1:
            answer11 = "There is no #1!";
            break;
        case 99:
            answer11 = "Missed me by this much";
            break;
        case 7:
            answer11 = "Ate nine";

    }
    return answer11;
}

console.log(changeToSwitchOfficial(1));

//function returns true or false boolean values

function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }


}

console.log(isLess(1, 3));

//above sequence shortened:

function isLessImproved(a, b) {

    return (a < b);
}

console.log(isLessImproved(4, 1));

//return early pattern for functions using a return statement:

//if a or b are less than 0, function will exit early with a value of undefined.

function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }

    //pow(a,b) returns the result for an expression with a variable and an exponential value e. 2^2


    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));


}

console.log(abTest(1, 1));

// Counting Cards: Blackjack card counting function. When you see a low card the count goes up and when you see a high card the count goes down. if it's a middle card the count stays the same. when the count is positive, the player should bet high. when the count is 0 or negative, the player should bet low.  use a switch statement to figure out what card has been passed in and what to do about it. 

var count1 = 0;

function cc(card) {

    switch (card) {

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count1++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count1--;
            break;

    }

    var holdbet = "Hold";

    if (count1 > 0) {
        holdbet = "Bet"
    }

    return count1 + " " + holdbet;

}

cc(2); cc(3); cc("K"); cc("A")

console.log(cc("K"));

//build javascript objects: objects are similar to arrays in that they have nested properties. Instead of using indeces to retrieve data, you use properties, also, objects use curly braces rather than square braces for arrays.
//properites are anything before the colon. (In the example below, name, legs, tails, friends)
//values are the things after the colons.
//properties of objects can be any datatype in javascript 
//can also use bracket notation to access property of an object.
//brackent notation is required if the name has a space in it 
var ourDog = {

    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

console.log(ourDog.friends[0]);


var testObj = {

    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

var entreeValue = testObj["an entree"];

console.log(entreeValue);

var testObj2 = {
    "my name": "Fernanda",
    "my age": 28,
    "my fave food": "spaghetti"
};

var myNameValue = testObj2["my name"];

console.log(myNameValue);

//accessing object property values with variables

var testObj3 = {

    12: "Namath",
    13: "Montana",
    14: "Unitas"

};

var name12 = 12;

var name12Result = testObj3[name12];

var name13 = 13;

var name13Result = testObj3[name13];

console.log(name12Result);
console.log(name13Result);


//updating object properties using dot notation:

var ourCats = {

    "names": ["Lux", "Lushi"],
    "ages": ["24 months", "4 months"],
    "coat": ["tabby", "black"],
    "favorite owner": ["Zander"]

}

ourCats["ages"] = ["baby", "little baby"];

console.log(ourCats["ages"]);

ourCats["meows"] = ["precious", "adorable"];

console.log(ourCats);


//add new properties to an object: using dot notation or brackets 


//in order to delete properties from the object, use delete keyword

delete ourCats["favorite owner"];

console.log(ourCats);


//can use objects to return values, in the following example, there a switch case that returns certain values:

function phoneticLookup(val15) {

    //this switch statement will be turned into an object and it will be used for look

    var result1 = ""

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston"


    }

    result1 = lookup[val15]
    return result1;
}

console.log(phoneticLookup("alpha"));

//to check if an object has a property, use checkProp method:

var myObj3 = {
    gift: "pony",
    pet: "Kitten",
    bed: "Sleigh"
};

function checkObj(checkProp) {

    if (myObj3.hasOwnProperty(checkProp)) {

        return myObj3[checkProp];

    } else {
        return "Not Found";
    }

}

console.log(checkObj("gift"));
console.log(checkObj("hello"));


//practice checkprop function using hasOwnProperty function which checks for a specific property with a given name inside an object.

var myShoppingList = {
    food: ["veggies", "meat", "fruits", "potatoes"],
    remodel: ["tiles", "spray paint", "trim color"]
}

function checkShoppingList(checkProp) {

    if (myShoppingList.hasOwnProperty(checkProp)) {
        return myShoppingList[checkProp];
    } else {
        return "struggles"
    }
}

console.log(checkShoppingList("food"));

myShoppingList.food.push("popcorn");

console.log(myShoppingList);

delete myShoppingList["food"];

console.log(myShoppingList);

myShoppingList["food"] = ["spaghetti ingredients"];

console.log(myShoppingList);


// delete method: delete nameOfVar[enter property here in quotes]

// add method: nameOfVar[enter property here in quotes] = [value information for property]

//push, shift, pop, and unshift methods an also be used:

myShoppingList.food.push("gum");

myShoppingList.remodel.pop()

myShoppingList.remodel.unshift("paint covers", "colors");

myShoppingList.food.shift();


console.log(myShoppingList);

//manipulating complex objects

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "cd",
            "8T",
            "LP"
        ],
        "gold": true

    },

    {
        "artist": "Eminem",
        "real name": "Marshall Mathers",
        "eye color": "blue"
    }
]

console.log(myMusic);

console.log(myMusic[1].artist);

//record collection coding challenge:

var collection = {

    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },

    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },

    "1245": {
        "artist": "Robert Palmer",
        "tracks": []

    },

    "5439": {

        "album": "ABBA Gold"

    }

};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

    //goal of this function is to pass in the object id and property and update the value depenidng upon which value was provided, then return the whole collection:

    switch (id) {
        case "2548":
            collection[id][prop] = JSON.parse(JSON.stringify(value));
            break;
        case "2468":
            collection[id][prop] = JSON.parse(JSON.stringify(value));
            break;
        case "1245":
            collection[id][prop] = JSON.parse(JSON.stringify(value));
            break;
        case "5439":
            collection[id][prop] = JSON.parse(JSON.stringify(value));
            break;
    }



    return collection;
}



console.log(updateRecords("1245", "artist", "Taylor Swift"));

//goal of this function is to update the collection such that:
// if the value is empty, the collection property gets deleted.
// if the property is tracks, just add to it rather than replace it
// other values, override if the value provided in the function

function updateRecordsTwo(id, prop, value2) {

    if (value2 === "") {

        delete collection[id][prop];

    } else if (prop === "tracks") {

        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value2)
    } else {
        collection[id][prop] = JSON.parse(JSON.stringify(value2));
    }

}

console.log(updateRecordsTwo(5439, "artist", "ABBA"));

// Iterate with while loops, while loops:

var myArray = [];

var i = 5;

while (i > 2) {

    myArray.push(i);
    i--;

}

console.log(myArray);

//iterate with a for loop

//first step is the initialization of the variable i. next is the condition, lastly is the expression. The expression is what we want to occur at the end of each iteration of the "for" loop.

var myArray2 = [];

for (var i = 0; i < 5; i++) {
    myArray2.push(i);
}

console.log(myArray2);

var myArray3 = []

for (var i = 1; i < 4; i++) {

    myArray3.push(i);

}

console.log(myArray3);

var str1 = "abcd"

var str2 = "a,b,c,d,e"

var array2 = [];


console.log("---------------------------------------------------------------------")

var array4 = [];

str2.split("2");

console.log(str2)

for (var i = 0; i < str1.length; i++)

    array4.push(str1[i])

console.log(array4);
console.log(array4[3])

var test = "h,e,l,lo"

var test2 = test.replace(",", "");
console.log(test2);

//Even Numbers With a For Loop;



var evenArray = [];

for (i = 0; i < 10; i += 2) {

    evenArray.push(i);

}

console.log(evenArray)

//Odd Numbers with For Loops

var oddArray = [];

for (i = 1; i < 10; i += 2) {

    oddArray.push(i);

}

console.log(oddArray)

//Count backwards with a For Loop

var backArray = [];

for (i = 10; i > 0; i -= 1) {

    backArray.push(i);

}

console.log(backArray);

//Count backwards using odd numbers

var backwardsOddArray = [];

for (i = 9; i > 0; i -= 2) {

    backwardsOddArray.push(i);

}

console.log(backwardsOddArray);

//iterate through an array with a for loop:

var preTotalArray = [9, 10, 11, 12];

var arrTotal = [0];


console.log(preTotalArray)


for (i = 0; i < preTotalArray.length; i += 1) {


    arrTotal += preTotalArray[i];

}

console.log(arrTotal);

console.log(1 + 2 + 3)


console.log("-----------------------------------");

var secondAttemptArray = [2, 3, 4, 5, 6];

var total = 0;


for (var i = 0; i < secondAttemptArray.length; i++) {

    total += secondAttemptArray[i];

}

console.log(total);

//Nesting for loops: if you have a multidimensional or nested array, you can use nested for loops to  access all the array elements.

function multiplyAll(arr) {

    var product = 1;

    for (i = 0; i < arr.length; i++) {

        //one for loop will only return three elememnts or length=3 for arr. To retrieve elements inside the array, use nested for loop:

        for (j = 0; j < arr[i].length; j++) {

            product *= arr[i][j]; //note, to find product of each number inside the nested arrays, use bracket notation to access inner array.

        }

    }

    return product;

}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);

// while loop vs do while loop:  while loops first checks the condition before it runs any code within the loop. A do while loop will always run at least one time and then it will check the condition.

var myArray2 = [];

var i = 10

while (i < 5) {
    myArray2.push(i);
    i++;
}

console.log(i, myArray2);

//do while loop: first run is executed, and condition is checked at the end.

var myArray4 = [];
i = 10;

do {

    myArray4.push(i);
    i++;

} while (i < 5);

console.log(i, myArray4);

//coding challenge. create a lookup profile function, where you pass in a name and property, and returns value.

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "1234567",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },

    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "76543",
        "likes": ["Hogwartz", "Magic", "Hagrid"]

    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "45676543456",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }

];

function lookUpProfile(name, prop) {

    for (var i = 0; i < contacts.length; i++) {

        if (contacts[i].firstName === name) {

            return contacts[i][prop] || "no such property"
            
            }
        } return "no such contact"


    }



var data = lookUpProfile("Akira", "likes");

console.log(data);

//generate random functions: simple way to create a random number in js

function randomFraction () {

    return Math.random();

}

console.log(randomFraction());

//generate a random whole number that rounds down, between 0-20

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

console.log(randomNumberBetween0and19);

//generate random numbers within a range:

function ourRandomRange (ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin +1)) +ourMin;

}
 
console.log(ourRandomRange(1,9))

function myRandomRange (myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin +1) + myMin);
}

console.log(myRandomRange(2,10)); 



//math.floor rounds decimals down to the nearest whole number
//math.random only generates a number between 0 and 1, not including 1, hence why you multiply this number by the maximum range, add one to include the maximum range. 

Math.floor(Math.random * 20) +1 /// => rather, than generate a number between 0 and 19, this method will return a number between 1 and 20. whatever number you add at the end will be the new floor but will also add to the range max, eg., if, instead of 1,  you used 4, then this function would generat a random number between 4 and 24.

//to circumvent this problem use a strucutre similar to the ourRandomRange function created above.

//using the parseInt function to convert to number variables:

//if a string cannot be converted into an integer, it returns NaN => not a number:

function convertToInteger(str){

    return parseInt(str);

}

var stringForInt = convertToInteger("3")

console.log(stringForInt);

//use the parseInt function with a Radix - radix specifies the base of the number in the string such as base 2 or base 7. A base 2 would be binary, so that's one of the most common ones to use. But, the defualt is a base 10.

//the radix can be any number between 2 and 36. => parseInt(string, radix) 

// base 10 means that when you count 0-10, when you get to 10, you need to introduce another integer to the left of the number. 0-9 are your base 10.

// base 2 means, as soon as we get to two (or an exponent of two) we need to add another digit to the left of our current digit. Because there are two symbols, each new digit has a value two times greater than the digit to its right.

function convertToInteger2 (str2) {

    return parseInt(str2, 2) // 2 changes the default to base 2 rather then base 10, that way, the computer knows the string being passed in is a binary number.
}


var convert2Int2 = convertToInteger2("1111")

console.log(convert2Int2)

function practicingRandomRanges (beg, end) {

    return Math.floor(Math.random() * (end - beg +1)) + beg;

}

var testingMyPractice = practicingRandomRanges (4, 9);

//console.log(testingMyPractice);

// using the conditional ternary operator you can replace the below if/else statement to...

function checkEqual (a, b) {

    if (a === b) {

        return true;
        
    }

    else {
        return false;
    }

}

var checkIfTrue = checkEqual(1,1);

console.log(checkIfTrue);


//this

function checkEqual2 (a,b) {

    return a === b ? true : false

}

//multiple ternary operators: in the below function, we are trying to determine if the number that is passed in is greater than zero, if so, return "positive", we are also checking if hte number is less than zero, if so, return "negative" otherwise, return zero.

function checkVals (num1) {

    return (num1 > 0) ? "positive" : (num1 < 0) ? "negitve" : "zero"

}

var checkingVals = checkVals(0);

console.log(checkingVals);

//var vs let. starting with es6 in 2015, we can now declare variables with let and const: Let, does not let you declare a variable twice. This error is good because you typically don't want to declare the same variable twice within the same scope. This allows your program to give you an error to let you know there's something wrong.

//"use strict" catches coding errors 

//preferrable to use let for this reason.

let catName = "Quincy";

catName = "Monkey";

console.log(catName);

//another major difference between var and let i that when you declare a variable with var, it is declared globally, or locally, if declared inside a function. however, let, is limited to the block statement or expression that it was declared in.

//blocks are anything inside curly brackets or sqaure brackets.

function checkScope() {

    "use strict";

    let i = "function scope";

    if (true) {

        let i = "block scope";
        console.log("Block scope i is: ", i);

    }

    console.log("Function scope i is : ", i);
    return i;

}

console.log(checkScope());

//it's important to continue to use let instead of bar so that the variable is used in the intended scope or block.

//declare a read-only variable with the const keyword

//const can declare a variable but it's read only

function printManyTimes(str) {

    "use strict";

    const sentence = str + " is cool!";

   // sentence = str + " is amazing!"; --> this would generate an error because you cannot reassign const keword.

   // if you know for usre you neve want to reassign avariable, always use const, you don't accidenally reassing it if you donw't need to. 

   // also, when using const, declare the var name using all cap letters.

    for (let i = 0; i < str.length; i+=2) {

        console.log(sentence);

    }

}

console.log(printManyTimes("freeCodeCamp"));


//Mutate an array declared with const:

const s = [5, 7, 2];

function editInPlace() {

    "use strict";

    //s= [2, 5, 7];

    s[0]=2;
    s[1]=5;
    s[2]=7;

 return s

}

console.log(editInPlace());

///object.freeze will prevent object mutation as seen above:

//in the below function, const math_constants was declared with an object value of pi=3.14, however, in the "try catch" we attempt to change that value by mutating it to 99. This will be allowed because obj.freeze wasn't

// function freezeObj() {

//   "use strict";

//   const MATH_CONSTANTS = {

//     PI : 3.14 

//   };

//   try {
//     MATH_CONSTANTS.PI = 99;

//   }catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();

// console.log(PI);


//here, we will implement obj.freeze to see how it works to prevent the object mutation from occurring.

// function freezeObj() {

//     "use strict";
  
//     const MATH_CONSTANTS = {
  
//       PI : 3.14 
  
//     };
  
//     Object.freeze(MATH_CONSTANTS);

//     try {
//       MATH_CONSTANTS.PI = 99;
  
//     }catch (ex) {
//       console.log(ex); // ex stands for exception
//     }
//     return MATH_CONSTANTS.PI;
//   }
  
//   const PI = freezeObj();
  
//   console.log(PI);
  
//using arrow functions to write concise anonymous functions:

// var magic = function() { 
    
//     //this function is considered anonymous because it has no name. instead, it's assigned to the variable magic. whenever you have an anonymous function, you can convert it to an arrow function.

//     return new Date();

// };


// var magic = () => {

//     return new Date();

//     // when returning only one element, you don't need curly braces or a return statement
// }

const magic = () => new Date(); // this is the transformation of a previosuly, lengthy, anonymous function.

//Write Arrow Functions with Parameters:

//convert the below commented out function into an arrow function:

// var myConcat = function (arr1, arr2) {

//     return arr1.concat(arr2);
// }

// console.log(myConcat([1,2], [3,4,5]));

const myConcat = (arr1, arr2) => arr1.concat(arr2);// for good measure, when assigning a function to a variable, change to const, that way the function is not redefined by accident.

console.log(myConcat([1,2], [3,4,5]));

//using arrow functions for higher order functions such as map, filter, and reduce.
    //map, filter, and reduce take functions as arguments for processing collections of data.
    //whenever one function takes another function as an argument, that's a good time for an arrow function.
    //will update the below function so that only the positive integers in the array are squared.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num >0).map(x => x*x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


//Write higher order arrow functions:

//in order to create more flexible functions, you can use default parameters. The default parameter kicks in when the argument is not specified or is undefined.


const increment = (function(){

    return function increment(number, value){

        return number + value;

    };

}) ();

console.log(increment(5,2));
console.log(increment(5))

let moxie = ["1","b","c","d","e"];

let thunder = [1,"h","j","d","k","e"];

let attack = [];

for (let i = 0; i < moxie.length; i++) {

   

    for(let j = 0; j < thunder.length; j++){

       

        if(moxie[i] === thunder[j]){

            attack.push(thunder[j]);

             console.log(thunder[j]);
           
        }

    }

}

console.log(attack);

let str11 = "a,b,e,c,d,e";
let str12 = "degevs";

let arr12 = [];

let arr13 = [];

let arr14 = [];

str1.split("");

console.log(str11);

for (let i = 0; i < str11.length; i ++){

    if (str11[i] != ",") {

        arr12.push(str11[i]);
    }

}
// console.log(str11)
console.log(arr12)

//learn to use map and filter + arrow functions to type this out more elegantly.

//learn to use dictionaries to make this solution more efficient 

