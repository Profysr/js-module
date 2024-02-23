//Todo: Q No 01

// let exp = "5" - 3;

//* The answer is 2 because of type coercion: refers to the automatic conversion of datatypes from one type to another. By using type coercion, JS allows to make datatypes compatible to complete the operations or comparison

//Todo: Q No 02

// let exp = 2 < 12 < 5;

//* expression always eveluated from left to right
//* 2 < 12 ==> true === 1
//* 1 < 5 ==> true === 1

//* bool(0) = false
//* bool(1) = true
//* int(false) = 0
//* int(true) = 1

//Todo: Q No 03

let exp = "20" + 10 + 10;
console.log(exp);

//* 201010 because exp evelauted from left to right so for the "20"+10, Js do type coercion as thinking that + is string concatenation operator
