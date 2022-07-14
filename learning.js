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