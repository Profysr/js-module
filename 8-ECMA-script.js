//? var, let, const

// var a = 12345;
// if (true) {
//   let a = 5;
//   console.log("Block Scope using let keyword a: " + a);
// }
// console.log("Global Scope using var keyword a: " + a);

// const myFavName = "Bilal"; //* Block Scope Variable as let but can't reassigned
// myFavName = "Bilal Ahmad" //! const variables can't reassigned again;

// var a = 12345;
// if (true) {
//   let a = 5;
//   a = 10;
//   console.log("Block Scope using let keyword a: " + a);
// }

// if (true) {
//   const a = 5;
//   a = 15; //! gives you error
//   console.log("Block Scope using const keyword a: " + a);
// }
// console.log("Global Scope using var keyword a: " + a);

//? Template Literals or Template Strings: provides a convenient way to create strings

let name = "Bilal";
let age = 15;

//Todo: String Interpoilation: Embedd expressions directly into strings

let exp = `My Name is ${name} having age is ${age} and after ${
  18 - age
} Years, I've my own identity card`;

// console.log(exp);

//Todo: MultiLine Strings
let multiLine = `
    Hey I m ${name}
    my age is ${age}.
    and after ${18 - age} Years, I've my own identity card.
`;

// console.log(multiLine);

//? Default Parameters

function sum(a, b = 10) {
  console.log(a + b);
}

// sum(5);
// sum(5, 20);

//? Arrow Functions
const arrowSum = (a, b) => console.log(a + b);
arrowSum(10, 20);
