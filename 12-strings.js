// let str = "Hello, World!";
// console.log(str.length); //* includes all the characters, punctuation and space

// Todo: Escape Character ==> saying that you can add any special character in the string using \ and then after the character
// let str = "I m 'Bilal Ahmad' \n & I m doing \"full stack development\" course";
// console.log(str);

// Todo: String Search
// console.log(str.indexOf("bilal")); //! -1
// console.log(str.indexOf("Bilal")); //* returns the index of first occurence of the string
// console.log(str.lastIndexOf("Ahmad"));

// console.log(str.search(/ahmad/i));

//? Difference
//* Using Search() you can also passed regular expressions to perform search

//! the Best way to search in the string
// let matchStr = "javascript, Welcome to the World Best Javascript course";
// let results = matchStr.match(/javascript/gi);
// console.log(results);
// let results = matchStr.matchAll(/javascript/gi);
// console.log(...results);
// match all Returns an iterator and you can also passed regular expressions

//Todo: Extracting a String
// let sliceStr = str.slice(str.indexOf("Bilal"), str.indexOf("&"));

// let subStr = str.substring(str.indexOf("Bilal"), str.indexOf("&"));
// console.log(subStr);

//? Difference between both
//* Slice() method can accept negative indexes and starts from the end of the string while substring consider any negative index as zero

//Todo: CharAt() or at();
let str = "Hello, World!";
// console.log(str.charAt(4));
// console.log(str.at(-2));

// Todo: Replace String
// let newstr = str.replace(/world/i, "Javascript");
// console.log(newstr);

// Todo: Remove Extra WhiteSpaces from start and end
// let trimStr = "    Hello   World   ";
// let afterTrim = trimStr.trim();
// console.log(trimStr);
// console.log(afterTrim);

// Todo: split()
let fruits = "orange,banana,apple";
let reverseFruits = fruits.split(",").reverse().join(" , ");
// console.log(fruits);
console.log(reverseFruits);
