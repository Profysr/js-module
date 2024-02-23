//Todo: Challenge
const months = ["Jan", "march", "April", "June", "July"];

//? Question 1
// months.splice(months.length, 0, "Dec");
// console.log(months);

//? Question 2
// console.log(months.splice(months.length - 1, 1, "Dec")); //! empty array if not deleting anything

//? Question 3
// months.splice(months.indexOf("march"), 1, "March");
// console.log(months);

//? Question 4
// months.splice(months.indexOf("June"), 1);
// console.log(months);

//Todo: Challenge for filter Array
// const products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 300 },
//     { name: "Smartwatch", price: 150 },
//   ];

//   let filterArray = products.filter((currElem) => {
//     return currElem.price <= 500;
//   });

//   console.log(filterArray);

//Todo: Challenge for Map and Filter Array

//? Question 1
// let fruits = [
//   "apple",
//   "mango",
//   "grapes",
//   "pineapple",
//   "orange",
//   "grapes",
//   "kiwi",
// ];

// let capitalizedArr = fruits.map((currElem) => {
//   return currElem.toUpperCase();
// });
// console.log(capitalizedArr);

//? Question 2
// let arrOfNum = [5, 3, 7, 3, 7, 2, 8, 2, 1];

// let newArr = arrOfNum.map((currElem) => {
//   if (currElem % 2 === 0) {
//     currElem = currElem ** 2;
//   }
//   return currElem;
// });

// console.log(newArr);

//? Question 3
// let fruits = [
//   "apple",
//   "mango",
//   "grapes",
//   "pineapple",
//   "orange",
//   "grapes",
//   "kiwi",
// ];

// let mrArr = fruits.map((currElem) => {
//   return `Mr ${currElem}`;
// });

// console.log(mrArr);

//? Question 4
// let numbers = [1, 2, 3, 4, 6, 5, 4, 7, 6, 2];

//Todo: Is there any way to get the unique numbers
// let uniqueNumbers = numbers.filter((currElem, index, arr) => {
//   return arr.indexOf(currElem) === index;
// });

// console.log(uniqueNumbers);
//? Sorting
// console.log(uniqueNumbers.sort());

//? comparing
// let sortedNumbers = uniqueNumbers.sort((a, b) => {
//   if (a > b) return 1;
//   else if (a < b) return -1;
// });

// console.log(sortedNumbers);

//? Question 5

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];

let total = 0;

// let total = 0;
// const totalPrice = products.map((currElem) => {
//   return (total += currElem.price); //! [ 1200, 2000, 2300, 2450 ]
// });

// const totalPrice = products
//   .map((currElem) => {
//     return currElem.price;
//   })
//   .reduce((accm, currPrice) => {
//     return accm + currPrice;
//   }, 0);

// console.log(total);
// console.log(totalPrice);
