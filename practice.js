// // // // // let firstName = "Ali";
// // // // // let secondName = "Hassan";
// // // // // console.log(firstName + secondName);
// // // // // let number = Number(prompt("Hello Mr Enter your Number"));
// // // // // if (number < 12) {
// // // // //   console.log("Hello ali your are eating Rice ");
// // // // // } else {
// // // // //   console.log("You are eating bananas");
// // // // // }
// // // // // let table = Number(prompt("Enter your nuber"));
// // // // // switch (table) {
// // // // //   case 2:
// // // // //     console.log("Table is under 10");
// // // // //     break;
// // // // //   case 5:
// // // // //     console.log("This is a great table");
// // // // //     break;

// // // // //   default:
// // // // //     console.log("This is The modern area Of programinf");
// // // // //     break;
// // // // // }
// // // // // let func1 = function () {
// // // // //   console.log("Hello Ali How are You");
// // // // // };
// // // // // func1();
// // // // // function sub() {
// // // // //   console.log("Function Dclarations");
// // // // // }
// // // // // sub();

// // // // // let arroFunc = () => {
// // // // //   console.log("This is Arrow Functions ");
// // // // // };
// // // // // arroFunc();

// // // // // let fun1 = function (name = "Ali Hassan", cycle = "Subaydar") {
// // // // //   console.log(name, " ", cycle);
// // // // // };
// // // // // fun1("Halima");
// // // // // fun1("", "Usmania");
// // // // let returnFunc = function (birth) {
// // // //   return birth;
// // // // };
// // // // console.log(returnFunc("23/23/456"));
// // // // // Function /Call inside functions
// // // // let num1 = function (num) {
// // // //   return num + 23;
// // // // };
// // // // let num2 = function () {
// // // //   let sum = num1(34);
// // // //   return sum;
// // // // };
// // // // console.log(num2());
// // // // // arrays
// // // // // let arra = ["Ali Hassan", 1, 2, 3, 4, 5, 6, 7, 8];
// // // // // console.log(arra);
// // // // // let su = new Array(1, 2, 3, 4, 5, 6);
// // // // // console.log(su);
// // // // // console.log(su[2]);
// // // // // console.log(su.pop());
// // // // // console.log(su);
// // // // // console.log(su.push("Alibad"));
// // // // // console.log(su);

// // // // // console.log("Brakets and Dot notations in js");
// // // // // let obj = {
// // // // //   name: "Ali ",
// // // // //   age: "Hassan",
// // // // //   sum: 12 + 34,
// // // // //   birthDate: "12/10/2002",
// // // // //   friends: ["Ali ", "Hassan", "Class", "Usman"],
// // // // // };
// // // // // console.log(obj);
// // // // // let s1 = obj.age;
// // // // // console.log(s1);
// // // // // let birth = "birth";
// // // // // console.log(obj[birth + "Date"]);
// // // // // console.log(obj.friends.indexOf("Hassan"));

// // // // // Add Properties in Objects
// // // // // let obj2 = {
// // // // //   name: "Ali Hassan",
// // // // //   rollNum: "5063",
// // // // //   objFunc: function () {
// // // // //     return (this.classify = "A Section ");
// // // // //   },
// // // // //   info: function () {
// // // // //     console.log(`${this.name} sir you are ${this.rollNum}`);
// // // // //   },
// // // // // };

// // // // // obj2.class = "BSSE-A";

// // // // // console.log(obj2);
// // // // // console.log(obj2.objFunc());
// // // // // obj2.info();

// // // // // loops in js
// // // // // let obj = {
// // // // //   name: "Ali Hassan",
// // // // //   rollNum: "5063",
// // // // //   friends: ["Ali", "Hassan", "Alama", "Ahmad"],
// // // // //   func: function () {
// // // // //     this.newfriends = [];
// // // // //     for (let i = 0; i < this.friends.length; i++) {
// // // // //       this.newfriends.unshift(this.friends[i]);
// // // // //     }
// // // // //     return this.newfriends;
// // // // //   },
// // // // // };
// // // // // console.log(obj.func());
// // // // // while loops
// // // // // let things = ["Ali", "Hassan", "Class", "BSSE", "RollNo", "5063"];
// // // // // console.log(things);
// // // // // let itration = 1;
// // // // // while (itration < 7) {
// // // // //   console.log(things[itration]);
// // // // //   itration++;
// // // // // }
// // // // // java script in Domcl
// // // // // console.log("Js in Doms");
// // // // // let friends = ["Ali", "Danish", "Riaz", "Amir", "Sheikh Ahmad"];
// // // // // let ul = document.querySelector(".think");
// // // // // let createDom = function () {
// // // // //   let headText = "Here is ist Of Friends in University";
// // // // //   let heading = document.createElement("h1");
// // // // //   heading.textContent = headText;
// // // // //   ul.appendChild(heading);
// // // // //   console.log(ul);
// // // // //   for (let i = 0; i < friends.length; i++) {
// // // // //     let li = document.createElement("li");
// // // // //     li.textContent = friends[i];
// // // // //     ul.appendChild(li);
// // // // //   }
// // // // // };
// // // // // createDom();
// // // // // How Java script Works Behind The sceens
// // // // // variable scope and hoisting
// // // // // console.log("variable scope and hoisting ");

// // // // // let name = "Ali Hassan";
// // // // // let age = 21;
// // // // // let func1 = function () {
// // // // //   let age = 23;

// // // // //   console.log(name, age);
// // // // // };
// // // // // func1();

// // // // // hoisting
// // // // // console.log(letHoist);
// // // // // let letHoist = "Ali";
// // // // // console.log(varHoiest);
// // // // // var varHoiest = "VarHoisting";
// // // // // console.log(constHoiting);
// // // // // const constHoiting = "Const oisting";

// // // // // This function in diffrent Times
// // // // // var age = 23;
// // // // // function funcDec() {
// // // // //   let age = 234;
// // // // //   console.log("This Method in Function Declaration", this);
// // // // //   console.log(this.age);
// // // // // }
// // // // // let funcExp = function () {
// // // // //   let age = 234;
// // // // //   console.log("This Method in Function expresion", this);
// // // // //   console.log(this.age);
// // // // // };
// // // // // let arrowFunc = () => {
// // // // //   let age = 234;
// // // // //   console.log("This Method in Function arrow", this);
// // // // //   console.log(this.age);
// // // // // };
// // // // // funcDec();
// // // // // funcExp();
// // // // // arrowFunc();
// // // // // let jonas = {
// // // // //   name: "Jonas",
// // // // //   year: 2002,
// // // // //   calcage: function () {
// // // // //     console.log("in objects");

// // // // //     console.log(this);
// // // // //     console.log(2022 - this.year);
// // // // //   },
// // // // // };
// // // // // jonas.calcage();

// // // // // Arguments KeyWord
// // // // // let func1 = function (a, b, c) {
// // // // //   console.log(arguments);
// // // // //   for (let i = 0; i < arguments.length; i++) {
// // // // //     console.log(arguments[i]);
// // // // //   }
// // // // // };
// // // // // func1("Ali", "Hassan", "Hashim", "Husnain", "Hamid", "Halal");
// // // // // let sal = [1, 2, 3, 4, 5, 6, 7, 8, 90];
// // // // // func1(...sal);
// // // // //

// // // // // premitives values
// // // // // let obj1 = { name: "Ali", age: 23 };
// // // // // let obj2 = {
// // // // //   name: "Husnain",
// // // // //   age: obj1.age,
// // // // // };
// // // // // console.log(obj2);
// // // // // console.log(obj1);
// // // // // console.log("After  changng");
// // // // // obj1.age = 45;
// // // // // console.log(obj1);
// // // // // console.log(obj2);
// // // // // let obj3 = obj1;
// // // // // console.log(obj3);
// // // // // obj3.age = 67;
// // // // // console.log(obj1, obj3);

// // // // // arrau destructuring
// // // // // let names = ["Ali", "Hassan", "Qalam", "Azad", "India"];
// // // // // console.log(names[1], names[2]);
// // // // // names[1] = names[2];
// // // // // names[2] = names[1];
// // // // // console.log(names[1], names[2]);
// // // // // let [name1, name2, name3] = names;
// // // // // console.log(names);
// // // // // console.log(name1);
// // // // // // let nested arrays destructuring
// // // // // let arr = [
// // // // //   "Ali",
// // // // //   "Hassan",
// // // // //   "Qalam",
// // // // //   [12, 10, 34, 5, 6, 78, 90],
// // // // //   ["Ali", "Hassan", "Danish ", "Riaz ", "Amir", "furqan"],
// // // // // ];
// // // // // console.log(arr);
// // // // // let [ele1, , , [num, num45, num3, , , , numlast], [fri1, fri2, fri3]] = arr;
// // // // // console.log(ele1, num, num45, fri1, fri2);
// // // // // destructuring objects
// // // // // console.log("Destructuring objects");
// // // // // let obj1 = {
// // // // //   name: "Ali Hassan",
// // // // //   old: 21,
// // // // //   friends: ["Ali", "Hassan", "Alam", "AlamGeer"],
// // // // //   openHourse: 34,
// // // // //   days: {
// // // // //     friday: {
// // // // //       open: 11,
// // // // //       close: 12,
// // // // //     },
// // // // //     satur: {
// // // // //       open: 11,
// // // // //       close: 12,
// // // // //     },
// // // // //   },
// // // // // };

// // // // // let { name, old, friends } = obj1;
// // // // // console.log(friends);
// // // // // let { name: n, old: age, friends: fri } = obj1;
// // // // // console.log(fri, n, age);
// // // // // let {
// // // // //   friends: [a, b, c, d],
// // // // // } = obj1;
// // // // // console.log(a, b, c, d);
// // // // // // nstings approach
// // // // // let {
// // // // //   days: {
// // // // //     friday: { open, close },
// // // // //   },
// // // // // } = obj1;
// // // // // // console.log(days);
// // // // // console.log(open, close);
// // // // // // console.log(friday);

// // // // // console.log("Spread operators");
// // // // // let arr = ["Ali", "Hassan", "Class", "Bosed"];
// // // // // console.log(...arr);
// // // // // let arr2 = ["Ahsan", "Addek", "Umar", ...arr];
// // // // // console.log(arr2);
// // // // // console.log(...arr2);
// // // // // let copy = [...arr2];
// // // // // copy.push("User1");
// // // // // console.log(arr2);
// // // // // console.log(copy);
// // // // // let u1 = arr;
// // // // // console.log(u1);
// // // // // arr.push("user2");
// // // // // console.log(arr2);
// // // // // console.log(u1);

// // // // // console.log("Rest operators");
// // // // // let ar = ["Ali", "Hassan", "Class", "BSSE", "Roll", 5062];
// // // // // let [a1, a2, ...rest] = ar;

// // // // // console.log("REst", rest);
// // // // // console.log(a1, a2);

// // // // // let func1 = (name, city, age, ...rest) => {
// // // // //   console.log(rest);

// // // // //   for (let i = 0; i < 9; i++) {
// // // // //     console.log(rest[i]);
// // // // //   }
// // // // // };
// // // // // let vars = [
// // // // //   "Ali",
// // // // //   "Renala Khurd",
// // // // //   5063,
// // // // //   "BSSE-A",
// // // // //   "Section-A",
// // // // //   "Software engineering",
// // // // // ];
// // // // // let [var1, var2, var3, ...rest1] = vars;
// // // // // func1(...vars);

// // // // // console.log("nullise Coalasing operators");
// // // // // let sum = 0;
// // // // // let add = sum || 10;
// // // // // console.log(add);
// // // // // let sum1 = sum ?? 10;
// // // // // console.log(sum1);

// // // // // console.log("Forof Loop in js");
// // // // // let arr = ["Ali", "Hassan", "Danish", "Husnaian", "Sarfraz", "Adeel"];
// // // // // console.log(...arr);
// // // // // for (el of arr) {
// // // // //   console.log(el);
// // // // // }
// // // // // for (el of arr.entries()) {
// // // // //   console.log(el[0], el[1]);
// // // // // }
// // // // // for ([ind, ele] of arr.entries()) {
// // // // //   console.log(ind, ele);
// // // // // }

// // // // // console.log("objects enhancement in  es6");
// // // // // let days = ["Friday", "Saturday", "Sunday"];
// // // // // let n = "Ali Hassan";
// // // // // let obj1 = {
// // // // //   // name:name
// // // // //   n,
// // // // //   openingDays: {
// // // // //     [days[0]]: { open: 10, close: 12 },
// // // // //     [days[1]]: { open: 3, clos: 6 },
// // // // //   },
// // // // //   method(num1, num2) {
// // // // //     console.log(num1 + num2);
// // // // //   },
// // // // // };

// // // // // obj1.method(12, 34);

// // // // // opetional chaining
// // // // // console.log(obj1.openingDays?.monday);

// // // // // console.log(obj1.openingDays?.Friday);
// // // // // console.log(obj1?.openingDays?.Friday?.open);
// // // // // let weekDays = [
// // // // //   "Sunday",
// // // // //   "monday",
// // // // //   "tuesday",
// // // // //   "wednesday",
// // // // //   "thursday",
// // // // //   "friday",
// // // // //   "saturday",
// // // // // ];
// // // // // let openingHours = {
// // // // //   // # 3 factors we write arrays like this

// // // // //   [weekDays[4]]: {
// // // // //     open: 12,
// // // // //     close: 12,
// // // // //   },
// // // // //   [weekDays[5]]: {
// // // // //     open: 11,
// // // // //     close: 23,
// // // // //   },
// // // // //   [weekDays[3]]: {
// // // // //     open: 12,
// // // // //     close: 24,
// // // // //   },
// // // // //   [weekDays[6]]: {
// // // // //     open: 0,
// // // // //     close: 24,
// // // // //   },
// // // // // };

// // // // // let chickHouse = {
// // // // //   name: "ChichenHouse",
// // // // //   location1: "Welcome Road Renala khurd",
// // // // //   catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

// // // // //   starmanu: ["chicken pizza", "zinger burger", "chicken Tiikka", "Egg burger"],
// // // // //   openingHours: openingHours, rather we write this
// // // // // we use
// // // // //   openingHours, //that the new tric method 1
// // // // //   weekDays,
// // // // //   ordermanu: [
// // // // //     "chicken karahi",
// // // // //     "fajita kabab pizza",
// // // // //     "beef burger",
// // // // //     "mutton karahi",
// // // // //   ],
// // // // //   // #2 for methods we skip the function keyword and braces
// // // // //   order(strat1, main1) {
// // // // //     return [this.starmanu[strat1], this.ordermanu[main1]];
// // // // //   },
// // // // //   //   orderDelivery: function (obj) {
// // // // //   //     console.log(obj);
// // // // //   //   },
// // // // //   orderDelivery({ strat1 = 1, main1 = 0, time, address }) {
// // // // //     console.log(time);
// // // // //     console.log(address);
// // // // //     console.log(`order delivers ! ${this.starmanu[strat1]} and
// // // // //          ${this.ordermanu[main1]}  will be deliverd to ${address}
// // // // //          at ${time} pm`);
// // // // //   },
// // // // //   orderPizza(mainings, ...otherings) {
// // // // //     console.log(`The main ingredient of pizza is ${mainings}
// // // // //             and othe ingredients are ${otherings} `);
// // // // //   },
// // // // //   opendys24(day1, day2, day3, ...others) {
// // // // //     console.log(`The Chicken house give service ${day1} 24 hours service
// // // // //             and giv ethe 12 hours service in ${others}`);
// // // // //   },
// // // // // };

// // // // // let keys = Object.keys(chickHouse);
// // // // // console.log(keys);
// // // // // let keys1 = Object.keys(openingHours);
// // // // // console.log(keys1);

// // // // // let keys3 = Object.values(chickHouse);
// // // // // console.log(keys3);
// // // // // let keys4 = Object.values(openingHours);
// // // // // console.log(keys4);
// // // // // console.log("Looping over Objects");

// // // // // for (let ele of keys) {
// // // // //   //   console.log(ele);
// // // // //   console.log(chickHouse[ele]);

// // // // //   //   console.log(chickHouse[ele[1]]);
// // // // // }
// // // // // for (let ele of Object.keys(chickHouse).entries()) {
// // // // //   //   console.log(ele);
// // // // //   console.log(ele[0], ele[1]);
// // // // // }
// // // // // for (let ele of Object.keys(chickHouse).entries()) {
// // // // //   //   console.log(ele);

// // // // //   console.log(ele[0], chickHouse[ele[1]]);
// // // // // }
// // // // // // for (let ele of values) {
// // // // // //   console.log(ele[1]);
// // // // // //   //   console.log(chickHouse[ele[1]]);
// // // // // // }
// // // // // let Entries1 = Object.entries(chickHouse);

// // // // // for (let day1 of Entries1.entries()) {
// // // // //   console.log("Simple objects");
// // // // //   console.log(day1[0], day1[1]);
// // // // // }
// // // // // sets in js
// // // // // console.log("Sets in js ");
// // // // // let arr = ["Ali", "Hassan", "Danish", "Ali", "Hassan"];
// // // // // console.log(arr.length);
// // // // // let unique = new Set(arr);
// // // // // console.log(unique);
// // // // // console.log(arr);
// // // // // unique.add("Ahsan");
// // // // // unique.delete("Ali");
// // // // // console.log(unique);
// // // // // console.log(unique.has("Ali"));
// // // // //  lopping over sets
// // // // // console.log("looping over objects");
// // // // // for (let name of unique.entries()) {
// // // // //   console.log(name[1]);
// // // // // }
// // // // // // Example real usecase
// // // // // const staff = ["water", "chef", "water", "manager", "chef", "waiter"];
// // // // // //      converting intoarray
// // // // // let uniqstaff = [...new Set(staff)];
// // // // // console.log(uniqstaff);
// // // // // console.log("now we put this in the for loop");
// // // // // for (let [s1, s2] of uniqstaff.entries()) {
// // // // //   console.log(s1, s2);
// // // // // }

// // // // // maps in js
// // // // // console.log("Maps in js");
// // // // // let jsmaps = new Map();
// // // // // jsmaps.set("name", "Ali Haassan");
// // // // // jsmaps.set("age", 5062);
// // // // // jsmaps.set(true, "this is true");
// // // // // jsmaps.set(false, "this is False");
// // // // // jsmaps.set(12, "Ali Haassan");
// // // // // jsmaps.set("class", "BSSE-a");
// // // // // console.log(jsmaps.get("name"));

// // // // // for (let [key, value] of jsmaps) {
// // // // //   console.log(key, value);
// // // // // }

// // // // // first class function and higherorder functions
// // // // // console.log("First Class Functions in JS");
// // // // // console.log("a function wich takes function and return a function ");
// // // // // //first class functions
// // // // // let greeting = function (greet) {
// // // // //   return function (name) {
// // // // //     console.log(`Hello Mr ${greet} and ${name}`);
// // // // //   };
// // // // // };
// // // // // let g = greeting("Ahsan");
// // // // // g("Ali");
// // // // //

// // // // // // let call apply and bind functions
// // // // // let blueAir = {
// // // // //   name: "Blue-Airlines",
// // // // //   lataCode: "BAB123",
// // // // //   bookings: [],
// // // // //   book(flighNum, pass) {
// // // // //     console.log(`${pass} booked a seat on ${this.name}
// // // // //           and the flight plane : ${this.lataCode}
// // // // //            and flight number ${flighNum}  `);
// // // // //   },
// // // // // };
// // // // // let book = blueAir.book;
// // // // // book.call(blueAir, 23, "Ali Hassan");
// // // // // let swiss = {
// // // // //   name: "Swiss-Airline",
// // // // //   lataCode: "ATY768",
// // // // // };
// // // // // book.call(swiss, 35, "Husnain");
// // // // // book.apply(swiss, [67, "Aslam"]);
// // // // // let bookbind = book.bind(swiss);
// // // // // bookbind(78, "Ilyas Qadri");

// // // // // iffi functions
// // // // // (function fun() {
// // // // //   console.log("This is The iffi functions");
// // // // // })();
// // // // // arrays
// // // // // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // // // // g = movements.slice(0, 3);
// // // // // console.log(g);
// // // // // g = movements.splice(2, 5);
// // // // // console.log(g);
// // // // // const currencies = new Map([
// // // // //   ["USD", "United States dollar", "PKR", "Saudi-Rial"],
// // // // //   ["EUR", [1, 2, 3, 4, 5, 6, 7, 8, 9]],
// // // // //   ["GBP", "Pound sterling"],
// // // // // ]);
// // // // // console.log("********************************ali");

// // // // // currencies.forEach((el, ind, currMap) => {
// // // // //   console.log(`ci${ind} : ce${el}`);
// // // // //   //  console.log(currMap);
// // // // // });
// // // // // let uniqCurr = new Set(["usd", "euro", "pkr", "pkr", "euro", "gpb"]);
// // // // // console.log(uniqCurr);
// // // // // uniqCurr.forEach((item, ind, array) => {
// // // // //   console.log(`${ind} : ${item}`);
// // // // //   console.log(array);
// // // // // });

// // // // // // reduce methods in js
// // // // // let ac = [12, 34, 56, 78, 90, 78, 67, 56, 45];
// // // // // let totals = ac.reduce((acc, cur, ind, cuarr) => {
// // // // //   return acc + cur;
// // // // // }, 0);
// // // // // console.log(totals);
// // // // // let numbers = [12, 34, 56, 2, 45, 3, 67, 42, 90, 10, 7, 105, 6];
// // // // // numbers.sort((a, b) => {
// // // // //   if (a > b) return 1;
// // // // //   if (a < b) return -1;
// // // // // });
// // // // // console.log(numbers);
// // // // // creating arrays
// // // // // let s = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // // // // let x = new Array(5);

// // // // // x.fill(s);
// // // // // console.log(x);
// // // // // x.fill(2);
// // // // // console.log(x);

// // // // // let z = Array.from({ length: 8 }, (cur, i) => (i + 1) * 2);
// // // // // console.log(z);

// // // // // console.log(Number.isFinite(23));
// // // // // console.log(Number.isFinite(23.45));
// // // // // console.log(Number.isFinite("2345"));
// // // // // console.log(Math.round(23.7));
// // // // // console.log((2.7).toFixed(0));
// // // // // console.log((2.3).toFixed(3));
// // // // // console.log(Math.floor(23.45));
// // // // // console.log(new Date("Fri Aug 12 2022 "));
// // // // // console.log(new Date("october 12,2002 "));
// // // // // // passing strings
// // // // // // console.log(new Date(account1.movementDates[0]));
// // // // // console.log(new Date(2037, 0, 19, 15, 5));
// // // // // console.log(new Date(2037, 10, 33, 15, 5));

// // // // // asyncrounose
// // // // // let gtData = (country = "pakistan") => {
// // // // //   let request = new XMLHttpRequest();
// // // // //   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// // // // //   request.send();
// // // // //   request.addEventListener("load", () => {
// // // // //     let data = JSON.parse(request.responseText);
// // // // //     let [data1] = data;
// // // // //     console.log(data1);
// // // // //   });
// // // // // };
// // // // // gtData();

// // // // // let fetchmethod = (country = "pakistan") => {
// // // // //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// // // // //     .then((responce) => responce.json())
// // // // //     .then((data) => {
// // // // //       let [data1] = data;
// // // // //       console.log(data1);
// // // // //       return fetch(`https://restcountrie.com/v3.1/name/usa`);
// // // // //     })
// // // // //     .then((responce) => responce.json())
// // // // //     .then((data) => {
// // // // //       let [data2] = data;
// // // // //       console.log("The Data inner ", data2);
// // // // //     })
// // // // //     .catch((err) => console.error("Error is occured "));
// // // // // };
// // // // // fetchmethod("germany");

// // // // // promises in js
// // // // //   promises chain
// // // // // let waite = function (secs) {
// // // // //   return new Promise(function (resolve, reject) {
// // // // //     setTimeout(resolve, secs * 1000);
// // // // //   });
// // // // // };
// // // // // waite(2)
// // // // //   .then(() => {
// // // // //     console.log("i waite for 2 seconds");
// // // // //     return waite(3);
// // // // //   })
// // // // //   .then(() => {
// // // // //     console.log("i shall waite 3 seconds");
// // // // //     return waite(4);
// // // // //   })
// // // // //   .then(() => {
// // // // //     console.log("i shall waite 4 seconds");
// // // // //   });
// // // // let fetchData = async (country) => {
// // // //   let data = await fetch(`https://restcountries.com/v3.1/name/usa`);
// // // //   let result = await data.json();
// // // //   let [data1] = result;
// // // //   console.log(data1);
// // // // };
// // // // fetchData("pakistan");
// // // let a=23;
// // // function add(){
// // //   let b=34;
// // //   let c=23;
// // //   var d=45;
// // //   if(a<b){
// // //     let s=34;
// // //     var w=23;
// // //     // console.log(""s,w);

// // //   }
// // //   console.log(w);
// // //   // console.log(s);
  
// // //   return a+b

// // // }
// // // // console.log(d);
// // // console.log(add());


// // // let q='234';
// // // let b='345';
// // // console.log(+q);
// // // console.log(q);
// // // console.log(+q+ +b);
// // // let money6 = 0;
// // // if (money6) {
// // //   console.log("You net income is mote then 10");
// // // } else {
// // //   console.log("The your net income is Zero 0");

// // // }

// // // let age=18;
// // // let vote= age>=18 ? "Yes you can vote" :" Sorry waite 1 more year";
// // // console.log(vote);



// // // objects in js
// // let obj={
// //   name:'Ali hassan',
// //   age:14,
// //   vote: this.age>=18,
// //   friends:['ali','hassan','abs','andicxskcdn'],
// //   calcAge:function(){
// //     return this.age

// //   }

// // }
// // console.log(obj);
// // obj.name='Ali D';
// // console.log(obj);
// // console.log(obj.friends);
// // console.log(obj.friends[2]);
// // let j=obj.calcAge();
// // console.log(j);
// // obj.rollNo=5063;
// // console.log(obj);

// // // console.log(v);
// // let v=34;
// // console.log(i)
// // var i=34;

// // let calcage = function (birth) {
// //   //   console.log(2022 - birth);
// //   console.log("The this in function expresiion : ", this);
// // };
// // console.log(   calcage(2002));
// // let calcage1 = (birth) => {
// //   console.log(2022 - birth);
// //   console.log("The this in arrow function  : ", this);
// // };
// // console.log(calcage(2002));



// // let jonas = {
// //   name: "Jonas",
// //   year: 2002,
// //   calcage: function () {
// //     console.log("in objects");

// //     console.log(this);
// //     console.log(2022 - this.year);
// //   },
// // };
// // console.log(jonas.calcage());





















// const arr1 = [12, 45, 67, 89];
// // let l1=arr1[0];
// // let l2=arr1[1];


// let [l, k, j, h] = arr1;
// console.log(l, k, j, h);
// l = 2345;
// console.log(l, k, j, h);
// let newarr=[l,k.j,h];
// console.log(newarr);
// let newarr23= ['ali',12,3,4,5,6,7,8,9,0,[34,45,45,67,8,9]];
// let [a,b,c, ,d,e,f,g,]=newarr23;
// // let ab3=newarr23[0];





// let chickHouse = {
//   name: "ChichenHouse",
//   location: "Welcome Road Renala khurd",
//   catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

//   starmanu: ["chicken pizza", "zinger burger", "chicken Tiikka", "Egg burger"],
//   ordermanu: [
//     "chicken karahi",
//     "fajita kabab pizza",
//     "beef burger",
//     "mutton karahi",
//   ],
//   order: function (strat1, main1) {
//     return [this.starmanu[strat1], this.ordermanu[main1]];
//   },
// };










// let { name, catgories, ordermanu, starmanu, openingHours } = chickHouse;
// // console.log("name", name);
// // console.log("categoriessssss", catgories);
// console.log(starmanu);
// let { manu = [123, 34, 56, 78], starmanu: starter = [12, 45] } = chickHouse;


// console.log("************************");
// console.log(manu);
// console.log("starter ");
// console.log(starter);


// let 

let a=[1,2,3,4,5,6,7,8];
let b=[2.3,4,5,6,7,8,9];
let d=a;

let c=[...a,...b];
console.log(c);
console.log(d);

console.log(0 || "Ali HASSAN");
console.log("Ali Hassan" && "Imran");
console.log(0 && "Ali Hassan");
console.log("Ali " || "Hassan");


let name=12;
let obj={name,age:12,name};










