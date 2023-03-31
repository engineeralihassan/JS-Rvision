// let request = fetch("https://restcountries.com/v3.1/name/pakistan");
// console.log(request);
// promises is a container for stor values of asyncrounously loaded
// promises are container for future values
// # Consume promises returning by fetch
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
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
let countryData = function (country) {
  //   asume the promises
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((responce) => responce.json())
    .then(function (data) {
      console.log(data);
      let [data1] = data;
      console.log(data1);
      renderCountry(data1);
      let [neibour] = data1.borders;
      if (!neibour) return;

      return fetch(`https://restcountrie.com/v3.1/alpha/${neibour}`);
    })
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
      let [dat] = data;
      renderCountry(dat);
    })
    .catch((err) => console.log("There is n Error please try again later"));
};
btn.addEventListener("click", function () {
  countryData("germany");
});
