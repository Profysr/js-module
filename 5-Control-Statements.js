//Todo: If Statements

//? Q No 01

// let num = 7;
// let count;
// if (num % 2 === 0) console.log("even");
// else console.log("odd");

//? Q No 02

// function checkPrime(number) {
//   count = 0;
//   for (i = 2; i <= number; i++) {
//     if (number % i === 0) count++;
//   }
//   if (count === 1) {
//     console.log("prime");
//   } else {
//     console.log("not a prime number");
//   }
// }
// checkPrime(num);

//? Q No 03

// if (num === 0) console.log("zero");
// else if (num > 0) console.log("positive");
// else console.log("negative");

//Todo: Switch Statement
// let areaOfShape = "Circle";
// let a = 5;
// let b = 10;

// switch (areaOfShape) {
//   case "Rectangle":
//     console.log(a * b);
//     break;
//   case "Square":
//     console.log(a ** 2);
//     break;
//   case "Circle":
// let r = 2;
//     console.log(3.1416 * r ** 2);
//     break;

//   default:
//     console.log("Not a valid shape");
//     break;
// }

//Todo: Loops
// for (let i = 2000; i <= 2024; i++) {
//   if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
//     console.log("Leap Year: " + i);
//   }
// }
//? Table using while loop
// let i = 1;
// while (i <= 10) {
//   // let exp = "5 * " + i + " = " + 5 * i
//   let exp = `5 * ${i} = ${5 * i}`;
//   console.log(exp);
//   i++;
// }

//! For loop ko agr infinite banana hoto
// for (;;) {
//   console.log("Infinite");
// }

// for (let i = 1; i > 0; i++) {
//   console.log(i);
// }

//? Sum of Numbers from 1 to 10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

//? Prime Numbers are numbers having two factors 1 or itself
// let num = 8;
// let isPrime = true;
// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime === true) console.log("Prime Number");
// else console.log("not a prime number");

//? Table using for loop
// let tableOf = 12;
// for (let i = 1; i <= 10; i++) {
//   let exp = `${tableOf} * ${i} = ${tableOf * i}`;
//   console.log(exp);
// }

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (j = 1; j <= i; j++) {
//     pattern += " *";
//   }
//   console.log(pattern);
// }

//! Both Loops work same
// for (let i = 5; i >= 1; i--) {
//   let pattern = "";
//   for (j = 1; j <= i; j++) {
//     pattern += " *";
//   }
//   console.log(pattern);
// }

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (j = 5; j >= i; j--) {
//     pattern += " *";
//   }
//   console.log(pattern);
// }
