const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable

//self note, .pop() works <- and .shift() works ->

let numVar = nums.pop();//removes the value 0 from the nums array and makes it it's own value
let numVar2 = nums.pop();//removes the value 1 from the nums array and makes it it's own value
console.log(numVar);//prints the new value of numVar
// console.log(numVar2);//prints the value of numVar2
console.log(nums);//prints th new value of the nums array

// remove each of the first two items with shift(), saving each item to a variable

let numShift = nums.shift();//removes the value 6 from the array
let numShift2 = nums.shift();//removes the value 5 from the array
console.log(numShift);//prints the new value of numShift
console.log(numShift2);//prints the new value of numShift2
console.log(nums);//prints the new value of the array nums

// use push and unshift to add the variables back to the array in numerical order, 0-6

let numsPush = nums.push(5);//pushes the new value 5 to the array nums to the back of the array <-
let numsPush2 = nums.push(6);//pushes the new value 6 to the back of the array <-
let numsUnshift = nums.unshift(1);//pushes the new value 1 to the front of the array ->
let numsUnshift2 = nums.unshift(0);//pushes the new value 0 to the front of the array ->
console.log(nums);//prints out the current value of nums which is now [0, 1, 2, 3, 4, 5, 6] or in other words which is now 0 - 6