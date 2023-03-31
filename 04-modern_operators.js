// Array destructuring

const arr1 = [12, 45, 67, 89];
// let l1=arr1[0];
// let l2=arr1[1];


let [l, k, j, h] = arr1;
console.log(l, k, j, h);
l = 2345;
console.log(l, k, j, h);
// object
let chickHouse = {
  name: "ChichenHouse",
  location: "Welcome Road Renala khurd",
  catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

  starmanu: ["chicken pizza", "zinger burger", "chicken Tiikka", "Egg burger"],
  ordermanu: [
    "chicken karahi",
    "fajita kabab pizza",
    "beef burger",
    "mutton karahi",
  ],
  order: function (strat1, main1) {
    return [this.starmanu[strat1], this.ordermanu[main1]];
  },
};

//    skip an element from main arrays
let [cate1, , cate3] = chickHouse.catgories;
console.log(cate1, cate3);
let [, cate11, cate31] = chickHouse.catgories;
console.log(cate11, cate31);

// trivrsing
console.log(
  ([chickHouse.starmanu, chickHouse.ordermanu] = [
    chickHouse.ordermanu,
    chickHouse.starmanu,
  ])
);

//
// Nested array destructuring **********************
let nested = [12, 34, 56, ["Ali", "Anas", "awaise", 23]];
let [i, , , u] = nested;
console.log(i, u);
// destructuring into destructuring

let [w, , , [q, o, m, n]] = nested;

console.log(w);
console.log(q), console.log(o);
console.log(m, n);

// object destructuring
let { name, catgories, ordermanu, starmanu, openingHours } = chickHouse;
console.log("name", name);
console.log("categoriessssss", catgories);
let { manu = [123, 34, 56, 78], starmanu: starter = [12, 45] } = chickHouse;
console.log("************************");
console.log(manu);
console.log("starter ");
console.log(starter);
// spread operators

let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [12, 34, 56, arr[1], arr[2]];
let arr3 = [12, 34, 56, arr, arr2];
// sPreaD OPERATORS
let arr4 = [12, 34, ...arr2, ...arr];
console.log(arr4);
// spread operators
let arr111 = [1, 2, 3, 4];
let arr11 = [12, 34, ...arr111];
// rest operators left side in the assignment
let [a, ...others] = arr11;
console.log(others);
let [pizza, , risato, ...notfavouriteFood] = [
  ...chickHouse.ordermanu,
  ...chickHouse.starmanu,
];

// short curcuting

console.log(0 || "Ali HASSAN");
console.log("Ali Hassan" && "Imran");
console.log(0 && "Ali Hassan");
console.log("Ali " || "Hassan");



//nullies coallasing operators
let num = 0;
let sum = num || 10;
console.log(sum);
// nullis operator
sum = num ?? 10;
console.log(sum);
// for of loop
let ar = ["Ali Hassan", "Husnain", "Rubbani", "Sundar", "Elahi"];

let array = [12, 34, 56, 78, 90, ...arr];
for (Elements of array) {
  console.log(Elements);

}

for (Elements of ar.entries()) {
  console.log(`Onindex:${Elements[0] + 1} is :${Elements[1]}`);
}
// destructuring this arrays
for ([i, ele] of ar.entries()) {
//   var [i, ele] = [ele, i];
console.log(`Onindex:${ele + 1} is :${i}`);
//   looping on objects

  // # 3 factors we write arrays like this
  // object in loops
  let weekDays = [
    "Sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let openingHours = {
    [weekDays[4]]: {
      open: 12,
      close: 12,
    },
    [weekDays[5]]: {
      open: 11,
      close: 23,
    },
    [weekDays[3]]: {
      open: 12,
      close: 24,
    },
    [weekDays[6]]: {
      open: 0,
      close: 24,
    },
  };
  let chickHouse = {
    name: "ChichenHouse",
    location1: "Welcome Road Renala khurd",
    catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

    starmanu: [
      "chicken pizza",
      "zinger burger",
      "chicken Tiikka",
      "Egg burger",
    ],
    //   openingHours: openingHours, rather we write this
    // we use
    openingHours, //that the new tric method 1

    ordermanu: [
      "chicken karahi",
      "fajita kabab pizza",
      "beef burger",
      "mutton karahi",
    ],
    // #2 for methods we skip the function keyword and braces
    order(strat1, main1) {
      return [this.starmanu[strat1], this.ordermanu[main1]];
    },
    //   orderDelivery: function (obj) {
    //     console.log(obj);
    //   },
    orderDelivery({ strat1 = 1, main1 = 0, time, address }) {
      console.log(time);
      console.log(address);
      console.log(`order delivers ! ${this.starmanu[strat1]} and
         ${this.ordermanu[main1]}  will be deliverd to ${address}
         at ${time} pm`);
    },
    orderPizza(mainings, ...otherings) {
      console.log(`The main ingredient of pizza is ${mainings}
            and othe ingredients are ${otherings} `);
    },
    opendys24(day1, day2, day3, ...others) {
      console.log(`The Chicken house give service ${day1} 24 hours service
            and giv ethe 12 hours service in ${others}`);
    },
  };

  let keys = Object.keys(openingHours);
  console.log(":keys", keys);

  console.log(`we are open on ${keys.length} days is a week`);
  console.log("So we are open");

  for (let day of Object.keys(openingHours).entries()) {
    console.log("looping over objects keys");
    console.log(day[0], day[1]);
  }
  console.log("another example with out entries()");
}

// SETS in java script
let orderset =  Set(["Ali", "hassan", "hassan", "pasta", "ali", "Ali"]);

console.log(orderset);
console.log(orderset.size);
for (let order of orderset.entries()) {
  console.log(order[1]);
}


