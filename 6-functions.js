//* functions is a block of resuable code that performs specific tasks.
//* It organizes code into modular and manageable pieces and make program more readable.

// Todo: Function Declaration
// function greet() {
//   console.log("Hello World");
// }

//Todo: Function Invocation
// greet();

//Todo: Function Parameters and Arguments
// function sum(a, b, ...rest) { //? function parameters: values passed during the function declaration
//   let sum = a + b;
//   for (i = 0; i < rest.length; i++) {
//     sum += rest[i];
//   }
//   console.log(sum, rest);
// }

// let val = [15, 20, 25, 30];
// sum(5, 15, ...val); //? function arguments: values passed during the function invocation

//Todo: Function Expressions
//* Expression is a combination of value, variables and operators. Function assigned to an expression refers to function expression

// let helloWorld = function greet() {
//   console.log("Hello World");
// };

// // greet(); //! gives you error that greet is not defined;
// helloWorld(); //? works inplace of greet

//Todo: Anonymous Function
//* yh expression hi ka beta hai lekin is mein function ka koi naam ni hota : means function keyword k baad koi function name ni hai.
// let helloWorld = function () {
//   console.log("Hello World");
// };

// helloWorld(); //? works inplace of greet

// let result = function sum(a, b) {
//   return a + b;
// };

// console.log(result(10, 20));
// console.log(result(10, 30));

//Todo: Return Keyword
// function sum(a, b) {
//   return a + b;
// }
// let result = sum(5, 10);
// console.log(result);

//Todo: Immediately Invoked Function

// let apiCall = (function sum(a, b) {
//   let sum = a + b;
//   console.log(sum);
//   return sum;
// })(5, 10);

//* ab yh function ak dafah to chale ga hi chale ga but kiyu k humne isee expression function bhi banaya hai to hum further bhi isee call kar sakte hain

// console.log("The sum is: " + apiCall);
