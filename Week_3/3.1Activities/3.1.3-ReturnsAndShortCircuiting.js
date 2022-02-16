// ? what does the function below return?
function myNumberFunction() {
    let num = 2 ** 2;
    num = num + 3;
    num = num % 4;
    num = num * 14;
    return num;//returns the stored value of num when function is invoked
  }
  myNumberFunction()//returns 42
  // change the function above to return a value
  
  // Short Circuiting
  // ! the console.log will not print
  function shortCircuitFunction() {//declares that shortCircuitFunction is a function
    
    console.log(//state's the function's value that it will print once invoked

    //since the return statement was moved to the end of the function, now the code will run the string that wouldn't print!

      "This will never print because it is after the return statement."//Once a return statement has been assigned, it is the function's value.
      
    );
    return "Zap! - Short Circuited!";
  }
  console.log(shortCircuitFunction());//Because of the use of console.log, the function prints both values otherwise it'd only print the first!
  // ? will the following function short circuit?
  let height = 50;//declares that the variable height is equal to the number value 50
  function checkCircusRides() {//declares checkCircusRides as a variable
    if (height < 48) {
      console.log("Take a ride on the carousel!");//If our variable height is less than the number value 48 then it will print the string "Tale a ride of the carousel!"
    }
    if (height < 60) {
      console.log("Try the bumper cars!");
    }
    console.log("Enjoy the roller coaster!");
  }
  checkCircusRides()//Since our height is 50, invoking the function will print the result of the if statements "Try the bumper cars!" and "Enjoy the roller coaster!" 
  // change the function above to use short circuiting