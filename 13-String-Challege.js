//? Q No 01

// let start = "a".charCodeAt(0);
// let end = "z".charCodeAt(0);
// for (let i = start; i <= end; i++) {
//   console.log(String.fromCharCode(i));
// }

//? Q No 02
// let countVowels = (str) => {
//   let count = 0;
//   let vowels = "aeiou";
//   for (let char of str) {
//     if (vowels.includes(char)) count++;
//   }
//   return count;
// };

// console.log(countVowels("aeiou"));

//? Q No 03

// let checkAllVowels = (str) => {
//   let vowels = "aeiou";
//   for (let char of vowels) {
//     if (!str.includes(char)) return false;
//   }
//   return true;
// };

// //* Invoke Function
// console.log(checkAllVowels("Hello World"));

//? Q No 04

let isPangram = (str) => {
  let inputStr = str.toLowerCase().split("");
  //   console.log(inputStr);
  inputStr = inputStr.filter(
    (currElem) =>
      currElem.charCodeAt() >= "a".charCodeAt() &&
      currElem.charCodeAt() <= "z".charCodeAt()
  );

  return [...new Set(inputStr)].length === 26;
};

let result = isPangram(`The Quick ❤💋 Brown fox Jumps over the lazy dog`);
console.log(result);
