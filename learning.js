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

        collection[id][prop]= collection[id][prop] || [];
        collection[id][prop].push(value2)
    } else {
        collection[id][prop] = JSON.parse(JSON.stringify(value2));
    }

}

console.log(updateRecordsTwo(5439, "artist","ABBA"));

// Iterate with while loops, while loops:

var myArray = [];

var i = 0;

while (i < 5){

}

 
 