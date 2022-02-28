// Named Parameters



// write a function that takes two named parameters:
function functionWithTwoParameters(x, y){
// print each named parameter,
    console.log(x =  5);
    console.log(y =  10);
// then return the parameters added together
    return x + y;
}
// invoke the function and pass in two numbers

functionWithTwoParameters(10, 50);//no matter the value placed in the parameters, the values for x and y will always replace the present param/params and return the sum of said variables once the function is invoked

// invoke the function and pass in more than two numbers

functionWithTwoParameters(1, 2, 3, 4);//Only prints out the value of the 2 params x and y

// invoke the function and pass in only one number

functionWithTwoParameters(1);//prints the same results as the previous code

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// functionWithTwoParameters(3);

// Rest Operator
// add a rest operator to the function's parameters
// function functionWithTwoParametersRest
// (x, y, ...z) {
//     console.log("3rd x = ", x);
//     console.log("2nd y = ", y);
//     console.log("This is the rest operator", z);
//     console.log(x + y + z );
// }
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
// functionWithTwoParametersRest(1, 2, 3, 4, 7);