// we write code yet all is syncronouse like
function add() {
  let a = 23;
  let b = 34;
  let sum = a + b;
  return sum;
}
add();

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
// get data function
let getCountryData = (country = "pakistan") => {
  let request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    console.log("The Data from first Ajax call");

    //   let data = JSON.parse(this.responseText);
    let [data] = JSON.parse(this.responseText);
    console.log(data);
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
  });
};
getCountryData();
getCountryData("india");
getCountryData("usa");

// object new
let country="Valencia";
console.log(country);

