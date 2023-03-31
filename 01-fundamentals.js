//01 #variables and values
let number = 1;
console.log(number);
let num;
num = 2;
console.log(num);
// Camel case Notaion
let camelCaseNotation = "Ali";
console.log(camelCaseNotation);
// we use the reserved word as a variable by
let $new = "Hello ali";
console.log($new);
// names should be descriptive
let aliFirstName = "Ali";
console.log(aliFirstName);
//Use start uppercase variable for specific purposes
let PI = 14.27;
console.log(PI);

// 02 # Premitive Data Types
console.log("There are 7 types of Premitives Data types in js ");
console.log(
  "These are:- Numbers,Strings,Boolean,null,undefineds,symbol,bigint,"
);
let numberType = 234;
let age = 23;
let temprature = 23.45;
let stringType = "Ali Hassan";
let boleantype = true;
let undefinedType; //this is undefined
let nulltype = null; //this is null
let symbolType = Symbol(2345); // this value can not be changed);
let biginttype;
// Typeof variable in js
console.log(typeof age);
// Reasign a variable in js
age = 45;
undefinedType = "Ali Hassan Revision in Js";
console.log(age);
console.log(undefinedType);

// 03 #diffrence bt Const VAR Let
var ali = 23;
var ali = 25;
console.log(ali);
let arhum = 234;
// let arhum=2345; #-This is Error in case of let
// # var is function scope and let is block scope
console.log("var is function scope and let is block scope");
console.log(
  "var is Global accessed inside the this function on window object "
);
//04 # operators in java script
// Math-Operator in js
let sum = 23 + 23;
let a = 12;
let add = a - 4;
console.log(add);
let average = 23 + 23 + 45 / 3;
console.log(average);
let div = 23 / 3;
console.log(div);
let power = 20 ** 5;
console.log("The power is=" + power);
// # + operator also use concatination
console.log("The power is=" + power);

// # ASSIGNMENT OPERATORES
let x = 12;
x += 45;
console.log("The x Is=" + x);
let y = 1;
y++;
console.log("Y : " + " " + y);
let mul = 2;
mul *= 23;
console.log("multiply : " + " " + mul);

let divide = 1000;
divide /= 200;
console.log(divide);

x--;
console.log(x);

// COMPARITION OPERATORS
let aliAge = 20;
let age_husnain = 22;
if (aliAge - 10 > aliAge - 29) {
  console.log("Ali Need to try again and again untill success");
}
// 05  Operator precidence
console.log(12 - 34 - 56);

console.log(aliAge + age_husnain / 2);
console.log(aliAge - age_husnain / 2);
console.log((aliAge * age_husnain) / 2);

// 06 string literals
let age1 = 20;
fullname = "Ali Hassan";
programe = "BSSE-A";
let intro = `My name is ${fullname} 
            my age is ${age1}
            my programe is ${programe}
            i'm a student
            Thanks 😎`;
console.log(intro);
// 07 If Else
let age2 = 18;
let isOldEnough = age2 >= 18;
if (isOldEnough) {
  console.log("Ali You are able to vote");
} else {
  console.log(`Hello Ali Sorry 😥 you waite ${18 - age2} more Years to 
       get driving licence`);
}
// 08 type conversion and type coersion
total_age = Number("2002") + 12;
console.log(total_age);

// string from number
let total;
let num1 = 12;

let num2 = String(num1);
total += num1;
console.log(total);
console.log(num2);

// type coersion
console.log("10" + "23" + 234);
console.log("12" - "23" - 34);

let n = "1" + 1;
n -= 1;
console.log(n);

// Truthy and falsy values
// Check falsy values
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("Ali"));
console.log(Boolean("1234"));
console.log(Boolean(1234));
console.log(Boolean(123 + 4456));
let money = 2345;
let money6 = "0";
if (money) {
  console.log("You net income is mote then 10");
} else {
  console.log("The your net income is Zero 0");
}
// 09 # Equality operaotrs
let age5 = 20;
let marks = "20";
if (age5 == marks) {
  console.log("This is the fualt of the double equal sign bug");
} else {
  console.log("This is not equal");
}
let score = 10;
let numberGame = 23;
if (numberGame === 9) {
  console.log("DAimond win");
  score--;
  console.log(score);
} else if (numberGame === 6) {
  console.log("Gold  win");
  score--;
  console.log(score);
} else {
  console.log("Not matching Criteria");
}
// 10 # logical operaotrs
let retired = false;
let pentionar = false;
let birthYear = Number(prompt("Enter Birth Year"));
let currentYear = Number(prompt("Enter current Year"));
let age7 = currentYear - birthYear;

if (age7 === 60) {
  retired = true;
  console.log("This is yuor retirement Year");
} else if (age7 < 60) {
  console.log(`you have left the ${60 - age7} year in retirement`);
} else if (age7 > 60 && age7 <= 80) {
  console.log(`you are retired from last ${age7 - 60}`);
}
// 11 # switch case
let fees = Number(prompt("Enter your fees"));
switch (true) {
  case fees > 20000 && fees <= 32000:
    console.log("You are the Morning time student brother");
    break;
  case fees > 40000 && fees <= 45000:
    console.log("You are the Evening  time student brother");
    break;

  default:
    console.log("You are not student of this university");
    console.log(fees);
    break;
}

// 12 # expressions and statments
// # statement is values or large sentence or many more but the expression is only
// produce some values like true false etc
let statements = 23;
if (statements) {
  let home = 23000;

  console.log("This complete is a statement ");
}

let expression = true;
let exampleexpretion = 23;
// # ternary operators
let rent = 12000;
let house = rent >= 1200 && rent <= 15000 ? "Normal House" : "Building Good";
console.log(house);
