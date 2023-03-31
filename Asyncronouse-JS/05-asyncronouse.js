// console.log("Test is start");
// Promise.resolve("Resolved promises").then((res) => {
//   for (i = 0; i < 1000000000; i++) {}
//   console.log("Reloved:", res);
// });
// building promises
let lottry = new Promise(function (resolve, reject) {
  console.log("Lottry draw process in start");
  setTimeout(() => {
    let num = Math.random();
    console.log(num);

    if (num >= 0.5) {
      resolve("You win the lottry");
    } else {
      reject(new Error("You loose try again later"));
    }
  }, 2000);
});
lottry
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
//   promises chain
let waite = function (secs) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, secs * 1000);
  });
};
waite(2)
  .then(() => {
    console.log("i waite for 2 seconds");
    return waite(3);
  })
  .then(() => {
    console.log("i shall waite 3 seconds");
    return waite(4);
  })
  .then(() => {
    console.log("i shall waite 4 seconds");
  });
