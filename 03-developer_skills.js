// rules of hoisting
adddec(12, 34);
// expAdd(12, 34);
// arrowAdd(12, 34);

function adddec(a, b) {
  console.log("function declaration");

  return a + b;
}
let expAdd = function (a, b) {
  console.log("function expression");
  return a + b;
};
var arrowAdd = (a, b) => {
  console.log("Arrow functions");

  return a + b;
};
// adddec(12, 34);
// expAdd(12, 34);
// arrowAdd(12, 34);
// real example
if (!product) deleteProduct();

var product = 10;
function deleteProduct() {
  console.log("all products deleted");
}
// 02 This method in js
let calcage = function (birth) {
  //   console.log(2022 - birth);
  console.log("The this in function expresiion : ", this);
};

let s = calcage(2002);

// THIS keyword IS FOR ARROW FUNCTIONS
// arrow function is not  this own this use the this in lexical

let calcage1 = (birth) => {
  console.log(2022 - birth);
  console.log("The this in arrow function  : ", this);
};

calcage1(2002);
// this is simple function dclaration
function calcage2(birth) {
  console.log(2022 - birth);
  console.log("The this in function declaration  : ", this);
}
calcage2(2002);
// for objects
// for objects
let jonas = {
  name: "Jonas",
  year: 2002,
  calcage: function () {
    console.log("in objects");

    console.log(this);
    console.log(2022 - this.year);
  },
};
// other object
let matilda = {
  year: 2004,
};
matilda["calcage"] = jonas.calcage;
console.log(matilda);
matilda.calcage();
jonas.calcage();

// This method inside object
// with inside the function another function
let husnain = {
  name: "Husnain",
  nick: "Rabbani",
  Uni: "UCMT",
  fees: 1050000,
  scolarshp: function () {
    this.scolarshp = (this.fees / 25) * 100;
    console.log("The scholarship is : ", this.scolarshp);
    let self = this;

    let isToper = function () {
      console.log("SELFFFFFFF", self);
      if (self.fees >= 100000) {
        console.log("Husnain is The topper" + self.fees);
      }
    };
    isToper();
  },
};
husnain.scolarshp();
// inner function undefined solution in Arrow functions
let anas = {
  name: "Anas",
  nick: "Ashiq",
  Uni: "Mishrishah",
  salary: 30000,
  saving: function () {
    this.scolarshp = (this.salary / 25) * 100;
    console.log("The saving is : ", this.scolarshp);
    let that = this; // w use this directly in arrow function

    let isToper = () => {
      console.log("Thisnis arraow", this);
      if (this.salary > 28000) {
        console.log("Anas is on Good job");
      }
    };
    isToper();
  },
};
anas.saving();
// Arguments keyword in js
let marks = function (a, b, c) {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
};

console.log(marks(12, 34, 56, 78, 90, 23, 54, 67, 98, 76, 45, 67, 98));
// premitives and objects
// premitives
let sum1 = 12;
let b = sum1;
sum1 = 2345;
console.log(sum1, b);

// objects
let aliunm = {
  name: "Ali Hassan",
  age: 20,
  marstatus: "unMarried",
};
let alim = {
  name: aliunm.name,
  age: aliunm.age,
};
console.log("Before", aliunm, "After", alim);
alim.marstatus = "married";

// object copies in js
let jessica = {
  name: "Jessica",
  age: "55",
  job: "teacher",
};
let jessicaedu = {
  matric: ["school of toughts", 500, 460, ["jonas", "Ali", "Matilda"]],
  inter: ["superior collage", 500, 389, ["schemaddman", "Ali", "sundar"]],
  uni: [
    "univerty of california",
    500,
    460,
    ["jonas scedmann", "Ali hassan", "Matilda"],
  ],
  bioData: function () {
    console.log("Matric Bio Data");
    console.log(`School Name    total    obtain    friends`);
    for (let i = 0; i < this.matric.length; i++) {
      console.log(`${this.matric[i]}:`);

      if (
        typeof this.matric[i] !== "string" &&
        typeof this.matric[i] !== "number"
      ) {
        console.log("Jessica friend");
        for (
          let j = 0;
          j < jessicaedu.matric[jessicaedu.matric.length - 1].length;
          j++
        ) {
          console.log(jessicaedu.matric[i][j]);
        }
      }
    }
  },
};
jessicaedu.bioData();

let jessicacopy = Object.assign(jessica, jessicaedu);
jessicacopy.matric.push("Husnain");
// jessicacopy.matric[2].push("Anas");

console.log(jessicacopy);
console.log(jessicaedu);



