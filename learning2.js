

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//higher order functions such as map or filter, take in functions as arguemnts to iterate through collections of data. whenever you're taking in a function as an argument, that's a good time for an arrow function.

//in order to create more flexible funcitons you can use default parameters. The default parameter kicks in when the argument is not specified or is not defined. See example below:

const increment = (function () {

    return function increment(number, value = 1) {

        return number + value;

    }
})();

console.log(increment(5, 2));

console.log(increment(5));

//Use the rest operator with function parameters 

//the rest operator allows you to create a function that takes a variable number of arguments.
//reduce method adds each number within a given array, the number after the comma represents the starting value, see example below:
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
const sum = (function () {

    return function sum(x, y, z) {

        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 7);
    };
})();

console.log(sum(1, 2, 3));

console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
//here, we update the method to use the rest operator

const sumOfNumbers = (function () {

    return function sumOfNumbers(...argsToPassIn) {

        return argsToPassIn.reduce((e, f) => e + f, 9);

    }

})();

console.log(sumOfNumbers(4, 2, 3, 4, 7));

console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------");


//Use the spread operator to evaluate arrays in-place

//the spread operator loos just likes the rest operator, three dots. But, it expands or spreads out an array. So, it takes an array and spreads it out into its individual parts.

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];

let arr2;

(function () {

    arr2 = [...arr1]; // here, without the spread operator, we would be setting array2 to equal array 1,  however, because we're using the spread operator, we are able to make arr2 equal to the contents of arr1, but if we change arr1, it won't impact arr2 any further

    arr1[0] = "potato"

})();

console.log(arr1);


//using destructuring assignment to assign variables from objects: This is a special syntax for neatly assigning values taken directly from an object to variable.

var voxel = { x: 3.6, y: 7.4, z: 6.54 }
//below is the old way of assigning each element inside the object above to a variable.
var x = voxel.x;

var y = voxel.y;

var z = voxel.z;

const { x: a, y: b, z: c } = voxel; //new way of destructuring an object

const AVG_TEMPERATURES = {

    today: 77.5,
    tomorrow: 79

};

function getTempOfTom(tomTemp) {

    const { tomorrow: tomorrowTemp } = tomTemp;

    return tomorrowTemp;

}

console.log(getTempOfTom(AVG_TEMPERATURES));

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

//Destructuring assignment with nested objects: to assign variables from nested objects

const LOCAL_FORECAST = {

    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {

    "use strict";

    const { tomorrow: { max: maxOfTomorrow } } = forecast;

    return maxOfTomorrow;

}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

//Use destructring assignment to assign variables from arrays: 

const [o, p, , q] = [1, 2, 3, 4, 5, 6]; //adding in the commas makes it so that it returns the values classified by the letters. The empty space represents the element in the array that was skipped.

console.log(o, p, q);

let ab = 8, bc = 6;
(() => {

    "use strict";

    [ab, bc] = [bc, ab];// can also use destructuring to 
})();

console.log(ab);
console.log(bc);

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

//Use destructring assignment with the rest operator: we can use destructuring assignment with the rest operator to reassign array elements.

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {

    const [, , ...arr] = list;// adding the rest operator and the two commas with no elements in between them, means, do nothing for the first or second element, everything else, put into the arr var. If you did decide to add elemnts between the commas, those would replace the items in the array that are added to the list.

    return arr;

}

const arr = removeFirstTwo(source);

console.log(arr);

console.log(source);

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------");


//use desstructruing assingment to pass an object as a function's parameters:

const stats = {

    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85

};

const half = (function () {

    return function half({ max, min }) { // commonly used for API calls.

        return (max + min) / 2.0;
    }


})();

console.log(stats);

console.log(half(stats));

//template literals are a special type of string that makes creating complex strings easier. you make them with a backtick

const person = {

    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `hello, my name is ${person.name}! I am ${person.age} years old.`

console.log(greeting);

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

// function makeList(arr) {

//     const resultDisplayArray = `
//     <li class="text-warning> ${arr[0]} </li>
//     <li class="text-warning> ${arr[1]} </li>
//     <li class="text-warning> ${arr[2]} </li>`;
//     return resultDisplayArray;

// }

// const resultDisplayArray = makeList(result.failure);

// console.log(resultDisplayArray);//naive solution

//see efficient solution below:

function makeList(arr) {

    const resultDisplayArray = [];

    for (i = 0; i < arr.length; i++) {

        resultDisplayArray.push(`<li class="text-warning> ${arr[i]} </li>`)

    }

    return resultDisplayArray

}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------");


//Write concise object literal declarations using simple fields

//es6 provided support for easily defining object literals.

const createPerson = (name, age, gender) => ({ name, age, gender })// first parentheses represents the values that are being passed in to the function, the values in curly braces after the arrow function represent he key value pairs to which each value will be assigned.

console.log(createPerson("Fernanda", 28, "female"));

//write concise declarative functions:

// an object can contain a function, this is the long way a function is written inside of an object:

// const bicycle = {
//  gear:2,
//  setGear: function(newGear) {
//"use strict";
// this.gear = newGear;
//}

// };

//here is the alternative way to declare a succinct function within an object:

const bicycle = {

    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }

}

bicycle.setGear(3);
console.log(bicycle.gear);

//use class syntax to define a constructor function:

class SpaceShuttle {

    constructor(targetPlanet) {

        this.targetPlanet = targetPlanet;

    }

}


var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

function makeClass() {

    class Vegetable {

        constructor(name) {

            this.name = name;
        }

    }
    return Vegetable;

}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//using getters and setters to control access to an object:

class Book {

    constructor(author) {

        this._author = author;

    }

    get writer() {
        return this._author;
    }

    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
};

// how to create a dictionary in js

function Dictionary() {

    this.datastore = []


    this.add = function (key, value) {

        if (key && value) {

            this.datastore.push({
                key: key,
                value: value
            });
        } return this.datastore;

    };


    this.removeAt = function (key) {
        for (var i = 0; i < this.datastore.length; i++) {

            if (this.datastore[i].key === key) {
                this.datastore.splice(this.datastore[i], 1);
                return this.datastore;
            }

        }
        return this.datastore;
    };

    this.findAt = function (key) {

        for (i = 0; i < this.datastore.length; i++) {

            if (this.datastore[i].key === key) {

                return this.datastore[i].value;

            }


        }
        return this.datastore;
    };

    this.size = function () {

        return this.datastore.length;

    };
}

var dictionary1 = new Dictionary();

dictionary1.add("one", 1);
dictionary1.add("two", 2)
dictionary1.add("three", 3)
dictionary1.add("four", 4)
dictionary1.add("five", 5)
dictionary1.add("six", 6)
dictionary1.add("seven", 7)

console.log(dictionary1.size());

console.log(dictionary1.datastore);

console.log(dictionary1.removeAt("one"));

console.log(dictionary1.findAt("three"));

//In javascript, "this", is the object that owns javascript code. the value of "this" when used in a function is the object that owns the function. the value of "this" when used in an object is the object itself. when used outside a function or object, "this" referes to the global object.

//this = the object that is executing the current function:

//arrow functions always bind to the global object, if you're attempting to use "this", do NOT use an arrow function.

//if the function is part of an object, we call that function a method. if the function is a method in an object,"this" references the object itself.

//use this when dealing with methods...(functions inside of objects)


//write a function that returns the first recurring character in it:
console.log("--------------------------------------------------------------------------------------------------------------------------------")
let intstr1 = "DCADC"

let intemptarr1 = []




function intFunc1(string1) {

    for (var i = 0; i < string1.length; i++) {

        for (var j = i + 1; j < string1.length; j++) {

            if (string1[i] === string1[j] && intemptarr1 < 2) {

                intemptarr1.push(string1[j]);
                // console.log(string1[j]);


            }
        }

    } return intemptarr1



}

console.log(intFunc1(intstr1));

// a hash table is used to implement associative arrays or mappings of key value pairs. hash tables are a common way to implement the map data structure or objects. 

//a hash table works by taking in a key input and runs it through a hash function. a hash function maps strings to numbers. usually, numbers just correspond to indices within an array.

let intarr1 = [-1, 3, 8, 2, 9, 5];

let intarr2 = [4, 1, 2, 10, 5, 20];

let intSum = []

let sumAbsVal = 0;

let champInd = 0;

let intSumCounter = 0;

let target = 24;

function approximateTarget(targetToApproximate1, targetToApproximate2) {

    // the object is to approximate the target number by adding an element from array one with an element from array 2.

    for (i = 0; i < targetToApproximate1.length; i++) {

        // console.log(targetToApproximate1)

        for (j = 0; j < targetToApproximate2.length; j++) {

            // console.log(targetToApproximate2)


            intSum.push((parseInt(targetToApproximate1[i] + targetToApproximate2[j])));
            // console.log(intSum[intSumCounter]);

            if (Math.abs(parseInt(target) - parseInt(intSum[intSumCounter])) <= Math.abs(parseInt(target) - parseInt(intSum[champInd]))) {


                champInd = intSumCounter;



            }

            intSumCounter++;




        }
    }

    return intSum[champInd];



}






console.log(approximateTarget(intarr1, intarr2));


console.log(25 % 5);

console.log("---------------------------------------------------------------------------------------------------------------------------------")


//recursion functions, solving smaller propblems to solve a larger problem. 

//function processDoll(doll) {

//base case - stopping condition we're checking for first. 

//if we found the piece of chocolate, return yum yum --> base case

//else if chocolate was not found continue to look for it, --> recursion
//if that base case fails, the recursive call to itself.

//}

//recursion example:


//sort, sorts letters in alphabetical order

let vals = [5, 6, 2, 9]

console.log(vals);

vals.sort();

console.log(vals)

//sort function  expects another function in order to establish the comparison that will dictate the sorting method to be used
//write a function that sorts the below array according to the y number:

//     let vals2 = [{

//         x:2,
//         y:10
//     },{
//         x:5,
//         y:6
//     }
// ];



// vals2.sort((a,b)=>{b.y - a.y});

// console.log(vals2)


str3 = "it was a dark and stormy night"
var newString = str3.split(" ");
console.log(newString);
newString.sort((a, b) => a.length - b.length);
console.log(newString);


//filter and map make a new array, reduce reduces things down, fill and sort act on an existing array.
// sort function will lieterally sort your array from least to greatest, without passing anything in.

//callbacks were used before es6 was introduced.

//callbacks and promises are types of async functions. meaning, we don't want to wait until a function has finished executing before comencing the execution of another function.

//async await was introduced in es7

function sing(callback) {

    console.log("la la la la la");

    callback();

}

function meow() {

    console.log("meow meow")

}

sing(meow);

console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

function multiplier(x, factor) {

    return x * factor;

}

console.log(multiplier(3, 6));

function multiplier2(value2) {

    return x1 => x1 * value2;

}

let doubler = multiplier2(2);

console.log(doubler(2));

console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

let arrayVals = [2, 4, 6, 2, 1]

// arrayVals = arrayVals.map(x => x *2 );

arrayVals.fill()

console.log(arrayVals);

//Linked Lists - linear data structure in which the elements are held together by usinga pointer. Head is the beginning and it has a reference to the next node. End of the linked list is a tail.  

//graph is a nonlinear data structure that contains nodes and edges. a node is a single unique value. an edge, represents a connection or relationship between two of these nodes. //instagram, everytime you follow a new user, you're creating a new edge. One way to represent a graph is with a 2d array or Adjacency Matrix. Create one row or one edge for every column, add a 1 at the point they intersect. facebook, friends are undirected graphs.

const airports = "PHX BKK OKC JFK MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [

    ["PHX", "LAX"],
    ["PHX", "JFK"],
    ["JFK", "OKC"],
    ["JFK", "HEL"],
    ["JFK", "LOS"],
    ["MEX", "LAX"],
    ["MEX", "BKK"],
    ["MEX", "LIM"],
    ["MEX", "EZE"],
    ["LIM", "BKK"]

];

//Given these two arrays, find a way to represent these arrays in a graph.

//representation using an adjacency list: can implement an adjacency list as a set of key, value pairs. by assigning each element of the routs array to the airports 

//good idea to use a map because it has built-in methods can help solve these kinds of problems: also behaves like a dictionary or hashmap that would be found in other languages.

const adjacencyList = new Map();

//map is the graph and at this point is empty, so now, we need to create a function that will add a node to the map: this function takes the airport code as an argument and then calls adjacency list set on the airpot and starts it off with an empty array. --> that's what you need to add a node on the graph.

//to add an edge on the graph: we need to update the entries for both the origin airpot and the destination, first  grab the entry for the 

function addNode(airport) {

    adjacencyList.set(airport, []);

}

function addEdge(origin, destination) {

    // adjacencyList.get(destination).push(origin);


    adjacencyList.get(origin).push(destination);
    // adjacencyList.get(destination).push(origin);


}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);

console.log("-------------------------------------------------------------------------------------------------------------------");
let rVals = [5, 4, 3, 2, 9];

function sum2(num2, val8) {

    return num2 + val8;
}

rVals.reduce(sum2);

console.log("-------------------------------------------------------------------------------------------------------------------");

