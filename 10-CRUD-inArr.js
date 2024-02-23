//Todo: Crud Operations in Array

let fruits = [
  "apple",
  "mango",
  "grapes",
  "pineapple",
  "orange",
  "grapes",
  "kiwi",
];

//? Push : Adds an elemnt to the end of Array and returns the length of Array after adding element
// console.log(fruits.push("guava"));

//? Pop : Removes an elemnt from the end of Array and returns the element value
// console.log(fruits.pop());

//? Unshift : Adds an elemnt to the start of Array and returns the length of Array after adding element
// console.log(fruits.unshift("fruit"));

//? shift : Removes an elemnt from the start of Array and returns the element value
// console.log(fruits.shift());

//? splice : Adds or remove the elements from the Whole Array

//* Array.splice(startIndex,deleteingCount,no of items u want to add in the form of string )
// console.log(fruits.splice()); //! returns an empty array
// console.log(fruits.splice(1)); //! jis element ka index idhr pass karu ga wahan se le kr end tk bqi saare elements delete karde ga yh
// fruits.splice(0, 1, "guava", "apple2"); //* pehle 0 index se start hoga, or phir 1 element (usii ko hi) delete karde ga, then guava add karde ga uski jgh
// console.log(fruits); //* returns the mutated array by splice method

//? Add an Element in the end using splice
// fruits.splice(fruits.length, 0, "newFruitIntheEnd"); //* We can add anywhere without deleting element by passing deleteCount to 0
// console.log(fruits);

//Todo: IndexOf(searchingElem,startIndex), lastIndexOf, includes : performs search of filter operations on the array

// console.log(fruits.indexOf("grapes", 5)); //? returns index if find otherwise -1
// console.log(fruits.lastIndexOf("grapes", fruits.length)); //? starts from the end of the array or in reversing order but returns index if find otherwise -1
// console.log(fruits.includes("grapes")); //? returns true or false
