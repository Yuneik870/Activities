// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

let myName = "Yuneik";
let myNumber = 18;
let myBoolean = true;
let myUndefined;
let myNull = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(myName, myNumber, myBoolean, myUndefined, myNull);

// create a variable that references a template literal
// inside the template literal, use two of the above variables

let myTrueStatement = `"It is ${myBoolean} that my age is ${myNumber}"`;

// reassign the value of the variable that references "null"

myNull = false;

// print the value and its type

console.log(typeof myNull);

// print a variable that causes a ReferenceError

// console.log(pets);

// alter the previous line to no longer cause a ReferenceError

let pets = 0;
console.log(pets);