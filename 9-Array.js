//? iterate an array using for-of and for-in loop

// let arr = ["apple", "mango", "grapes", "pineapple", "orange", "kiwi"];

// let student = {
//   name: "Bilal",
//   class: "BSE",
//   regNo: 4,
// };

//Todo: But what is difference among the for-of and for-in loop

//* for-in gives us indexes of iteratable objects like arrays and regular objects.
//? for Array
// for (let index in arr) {
//   console.log(index);
// }

//? for Object
// for (let key in student) {
//   console.log(key);
// }

//* for-of gives us element values of iteratable objects but not for regular objects.
//? for Array
// for (let index of arr) {
//   console.log(index);
// }

//? for Object
// for (let key of student) {
//   console.log(key); //! gives error saying that student is not iteratable
// }

// let keysOfStudent = Object.keys(student); //? using this, you can get keys of object
// let valuesInStudent = Object.values(student); //? using this, you can get values at keys

// for (const iterator of valuesInStudent) {
//   //✅✅
//   console.log(iterator);
// }

//Todo: Accesing Array Elements using forEach and map

//? ForEach : performs operations on eac element

// arr.forEach((currElem, index, currArr) => {
//   console.log(`${currElem}`);
// });

// let countArr = [5, 3, 7, 3, 7, 2, 8, 2, 1];
// countArr.forEach((currElem) => {
//   console.log(`${currElem + 2}`);
// });

//* We can perform different operations on each elements of the array but cannot alter the array or create the new array by returning it

// let newForEachArr = countArr.forEach((currElem) => {
//   return `${currElem + 2}`;
// });

// console.log(newForEachArr); //! gives us undefined

//? map() : creates a new array by performing opertions on each element
// let newMapArr = countArr.map((currElem, index) => {
//   return currElem + 2;
// });

// console.log(newMapArr); //* performs operations by creating a new array but does not alter the new array
// console.log(countArr); //* see map has not alter the original array

//Todo: Advantages of Map
//* can return a new Array
//* can also do chaining, like multiply each elem with 2 and then filter , the number < 10 and so-on

//Todo: Filter Method
// let countArr = [5, 3, 7, 3, 7, 2, 8, 2, 1];

// let newFilterArr = countArr.filter((currElem) => {
//   return currElem >= 2 && currElem <= 5;
// });

// console.log(newFilterArr);
