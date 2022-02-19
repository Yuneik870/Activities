const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable

const arrThree = arrOne.concat(arrTwo, 4, "e");//Combines the values of arrayOne to arrayTwo and adds the number value 4 and string value `e` to the new array arrayThree

// print the new, merged array

console.log(arrThree);//Prints the value of the new array arrThree

// join the merged array and print the result

console.log(arrThree.join(" "));//Joins the array into a string