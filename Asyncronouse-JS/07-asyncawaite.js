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
let wherAmI = async function (country) {
  try {
    let res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    let data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    let [data1] = data[0].borders;
    console.log(data1);
    let neigbour = await fetch(`https://restcountries.com/v3.1/alpha/${data1}`);
    let d = await neigbour.json();
    renderCountry(d[0]);
  } catch (error) {
    console.error("Error is occures", error.message);
  }
};
wherAmI("pakistan");
