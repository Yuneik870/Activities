// ? what should we expect to print?

console.log("2" + 2);//22
console.log(2 + "2");//22
console.log(2 + 2);//22
console.log("2" + "2");//22
console.log(true + true);//2
console.log(2 + true);//3

console.log(true + true + "true" + "false");//2true false
console.log(1 + 1 + "2" + "3");//223