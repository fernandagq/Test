let arrayOfNums = [1,2,3,4,5]

const arrayToMap = new Map();

counter = 0;

function doubleTheArray (val) {

   
    arrayToMap.set(val * 2, counter++ );


};

arrayOfNums.forEach(doubleTheArray);

console.log(arrayToMap)


//find all duplicates in an array

let dupeArr = [2,3,5,7,4,4,3,2,];

let dupes = [];

let nonDupes = [];


// function findTheDupes(dupVal){

//     for (let i = 0; i < dupVal.length; i ++){


//         for (let j = i +1; j < dupVal.length; j ++) {

//             if(dupVal[i] === dupVal[j]){

//                 dupes.push(dupVal[j]);
//             }

//         }

//     }

//     return dupes;

// }


// console.log(findTheDupes(dupeArr));

function findTheDUpes(dupVal){

     
    for(let num of dupVal) {

        if(!nonDupes.includes(num)){
            nonDupes.push(num)
        }else{
            dupes.push(num)
        }
    }
    return dupes;
}

console.log(findTheDUpes(dupeArr));

//convert roman to integer

//since there are a litmited number of symbols, a switch case might be implemented and a few if statements to take care of any numbers that require a sucinct output

function convertToInt (s) {

 const conversionMap = new Map();

    conversionMap.set("I", 1);
    conversionMap.set("V", 5);
    conversionMap.set("X", 10);
    conversionMap.set("L", 50);
    conversionMap.set("C", 100);
    conversionMap.set("D", 500);
    conversionMap.set("M", 1000);

    const n = s.length;// assign a variable to equal the length of the argument that is being passed in.

    let num = conversionMap.get(s[n-1]); // this is in order to get the value to the left of the value being passed in. This way, we can assess if the value of the current string is greater than, equal to, or less than the value of the string before it.

    for (let i = n - 2; i > 0; i-- ){

        if(conversionMap.get(s[i]) > conversionMap.get(s[i + 1])){

                num += conversionMap.get(s[i]);

        } else {
            num -= conversionMap.get(s[i]);
        }

    }

    return num;

}


let arrayToSort = [1,9,2,0];

let target = 10;

len = arrayToSort.length;

function findTarget(num, target) {

    let mapToTarget = new Map();

    for (let i = 0; i <  len; i ++) {

        var indexVal = num[i];
        
        var complimentPair = target - indexVal;

        if(mapToTarget[complimentPair] !== undefined) {

            return [mapToTarget[complimentPair], i];
        } else {
            mapToTarget[indexVal] = i;
        }

    }

    return mapToTarget;

}

console.log(findTarget(arrayToSort));
