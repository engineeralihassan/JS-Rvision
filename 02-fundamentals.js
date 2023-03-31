// 01 # use strict
"us strict";
// example
let interface = "Audio"; // its a reserved word show error is strict mode
let private = "Reserved word"; //its also a reserved word show error is strict mode
// 02 # Functions
// calling //running // invoking
function test() {
  console.log("My fist function in java script for now");
}
test();
// function are recieve and also return data functions are like machines
function recieveData(num1, num2) {
  let sum = num1 + num2;
  return `The sum of ${num1} and ${num2} : ${sum}`;
}

recieveData(12, 34);
console.log(recieveData(12, 45));
// example #2
function myTasks(video, examples, tool, socialMedia, ui, jspro) {
  // let complete = false;
  if (
    video === "yes" &&
    examples === "yes" &&
    tool === "yes" &&
    socialMedia === "yes" &&
    ui === "yes" &&
    jspro === "yes"
  ) {
    console.log(`Congratulation Ali Yuou all Task are complete`);
  } else {
    console.log(`Bcarefull your today tasks are not complete 
            workind more to complete today tasks`);
  }
}
// let video = prompt("Enter status of your task video");
// let examples = prompt("Enter status of your task Examples");
// let tool = prompt("Enter status of your task tool");
// let socialMedia = prompt("Enter status of your task socialMedia");
// let ui = prompt("Enter status of your task ui/ux");
// let jspro = prompt("Enter status of your task js mini project");
// myTasks(video, examples, tool, socialMedia, ui, jspro);

// 03 function declaration and function expressions
//function declarations
function declarations(birtjYear) {
  let age;
  let currentYear = Number(prompt("Enter current Year"));
  age = currentYear - birtjYear;
  return age;
}
// let age = declarations(2002);
// console.log(age);

//function  expressions  anonymus functions
let age1 = function (birtjYear) {
  let age;
  let currentYear = Number(prompt("Enter current Year"));
  age = currentYear - birtjYear;
  return age;
};
// let agereal = age1(2002);
// console.log(agereal);

// 04 # Arrow function
let average = (nm1, num2, num3) => {
  const aver = num2 + num3 + nm1;

  const average = aver / 3;

  return average;
};


console.log(average(12, 45, 67));

// 05 call function inside function
let ableVote = (age) => {
  let message;
  if (age >= 18) {
    message = "You are able to Vote cast in this year ";
  } else {
    message = `soory you are young to cast a vote yet ${age}`;
  }
  return message;
};

let checkVote = function (age) {
  let vote = ableVote(age);
  alert(vote);
};
let userAge = Number(prompt("Enter your age"));
checkVote(userAge);

// 06 # Arrays
let friends = ["Ali Hassan", "BSSE-a", 5063, 5000, "Evening"];
console.log(friends);
let friends2 = new Array(23, 45, 67, 89, "simplylearn");
console.log(friends2);
console.log(friends[2]);
console.log(friends.length);
console.log(`The last Element of arrays ${friends[friends.length - 1]}`);
// we also mutate and change the arrays
friends[2] = "Allama mohhamad Iqbal";
console.log(friends);
function calcAge(birthyear) {
  let age = birthyear - 2022;
  return age;
}
let arrage = [2002, 2003, 2005];
let s = calcAge(arrage[1]);
console.log(s);

// add new elements in arrays
let friend = ["Ali", "Hassan", "HUsnain", "usman", "usman"];
friend.push("Arslan");
let newlenght = friend.push("Aslam");
friend.unshift("Alama");
console.log(friend);
// REmove Elements from arrays
// from end remove
friend.pop();
console.log(friend);
// from start
friend.shift();
console.log(friend);
// from start
let number = [12, 23, 45, 67, 89, 09, 87, 65, 43];
console.log(number);
let dele = number.shift();
console.log(number);
console.log(dele);
let index = number.indexOf(67);
console.log(index);

// includes

let inp = Number(prompt("Enter the number"));
let inp2 = number.includes(inp);

// 07 # Objects in js

let obj = {
  firstName: "Ali Hassan",
  class: "BSSE-A",
  RollNo: 5062,
  friends1: ["Ali", "Hassan", "Anas", "Salman", "Bashir"],
};
console.log(obj);
console.log(obj.RollNo);
console.log(obj["class"]);
let n = "Name";
console.log(obj["first" + n]);
let n1 = "No";

console.log(obj["Roll" + n1]);

// object methods

let ali = {
  name: "Ali Hassan",
  location: "chak no 11/1L",
  class: "BSSE",
  RollNo: 5063,
  uni: "University of okara",
  friends2: ["Ali", "Anas", "Husnain"],
  calcAgeFunc: function (firstName, location, uni) {
    console.log(`${firstName} is lived in ${location}
            and his university is ${uni}`);
  },
};
// add properties in object
ali.tasks = "Complete ";
ali["famlyMembers"] = 8;
console.log(ali);
let s1 = "fees";
ali[s1] = 123;
console.log(ali);
ali["hasDriverlisence"] = true;
console.log(ali);
//     function call in object
ali.calcAgeFunc(ali.name, ali.location, ali.uni);
ali.calcAgeFunc(ali["name"], ali["location"], ali["uni"]);
ali["calcAgeFunc"](ali.name, ali.location, ali.uni);

let obj2 = {
  nam: "Ali Hassan",
  class: "BSSE",
  rollNo: 5063,

  objFunc: function () {
    console.log(`Hello Mr how are you this is functions inside the object`);
  },
};
obj.intrest = "Cricket";
obj2.objFunc();
// Loops in Java script
//    example

let ali1 = {
  name: "Ali Raza ",
  uni: "University of okara",
  brothers: ["Ali", "Mortza", "Usama", "sundar", "komal", "fateh ali", "aslam"],

  calcAgeFunc: function () {
    (this.age = 2022 - this.birthYear), (this.profession = "Student");

    console.log(`${this.name} is lived in ${this.location} .HE IS ${this.age}
           Years old ${this.profession} and he has 
           ${
             this.hasDriverlisence ? " A Driver licence" : "No driver licence"
           }and his university is ${ali1.uni}`);
  },

  newfriends: function () {
    this.newFriendList = [];
    for (let i = 0; i < 5; i++) {
      let ele = this.brothers[i];
      console.log(ele);

      this.newFriendList.unshift(ele);
    }
    console.log("New borthrs  list");
    console.log(this.newFriendList);
  },
};

ali1.newfriends();

// Foor lop in Js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let friends23 = ["Ali", "Mortza", "Usama", 456, "sundar", "komal"];

for (let i = 0; i < arr.length; i++) {
  console.log(`The Element is arrays ${arr[i]}`);
  console.log("The friends23 list " + friends23[i]);
}

let types = [];
console.log("*************Types array *****************");

for (let i = 0; i < friends23.length; i++) {
  friends[i] = typeof friends23[i];
  types.push(friends23[i]);
}
console.log(types);

// While loop
let itr = 1;

while (itr <= 10) {
  console.log(`${num} x ${itr} = ${num * itr}  `);
  itr++;
}
