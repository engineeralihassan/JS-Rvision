const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
// render country function
let renderCountry = (data) => {
  let card = `
                      <article class="country">
                  <img class="country__img" src="${
                    data.flags.png || data.flags.svg
                  }" />
                  <div class="country__data">
                    <h3 class="country__name">${
                      data.altSpellings[1] || data.name || "No name"
                    }</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)} people</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages.urd || data.languages[0]
                    }</p>
                    <p class="country__row"><span>💰</span>hello</p>
                  </div>
                </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", card);
  countriesContainer.style.opacity = 1;
};
// get data function
let getCountryNeibours = (country = "pakistan") => {
  let request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    console.log("The Callback Hell ");

    //   let data = JSON.parse(this.responseText);
    let [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
    //     let others data for neigbours country
    let [neibour] = data.borders;
    console.log(neibour);
    let request1 = new XMLHttpRequest();
    request1.open("GET", `https://restcountries.com/v3.1/alpha/${neibour}`);
    request1.send();
    request1.addEventListener("load", function () {
      console.log("The Neigbour country  ");
      let [data1] = JSON.parse(this.responseText);
      console.log(data1);
      renderCountry(data1);
    });
  });
};
getCountryNeibours("usa");
// Example of the call back hell
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 second passed");
    setTimeout(() => {
      console.log("3 second passed");
      setTimeout(() => {
        console.log("4 second passed");
        setTimeout(() => {
          console.log("5 second passed");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
