// print the function below
//Invoking the function by using (myNumberFunction) alone will only display the code while in contrast 
//printing myNumberFunction() will run the code assigned to it!

function myNumberFunction() {
    let num = 2 ** 2;
    num = num + 3;
    num = num % 4;
    num = num * 14;
    console.log(num);
}



  // now, invoke the myNumberFunction function

myNumberFunction();//Prints the solution of the function which is 42!

  // print just the function of console.log (no invocation)
  
  console.log(myNumberFunction);//prints [Function: myNumberFunction]