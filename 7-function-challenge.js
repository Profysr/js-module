//? Challenge 1: Reverse a String

let reverseTheStr = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

// let result = reverseTheStr("abcd");
// console.log(typeof result);

//? Challenge 2:  Is String palindrome (reads the same as backward and afterward)

let checkPalindrome = (str) => {
  let reverse = reverseTheStr(str);
  return str === reverse ? "Palidrome String" : "Not a Palindrome";
};

// let result = checkPalindrome("abccba");
// let result = checkPalindrome("level");
// let result = checkPalindrome("radar");
// let result = checkPalindrome("bilal");

//? Challenge 3:  Is String palindrome (reads the same as backward and afterward)

let calTwoNum = (a, b) => {
  return (op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return "Not a valid Operator";
    }
  };
};

// let result = calTwoNum(10, 5)("**");
// console.log(result);

// let inputNum = calTwoNum(10, 5);
// let result = inputNum("+");
// console.log(result);
