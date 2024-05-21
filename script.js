let search_item = document.querySelector(".search-item");
let search_button = document.querySelector(".search-button");
let get_result = document.querySelector(".get-result");
let loading_spinner = document.getElementById("loading-spinner");

search_button.addEventListener('click', () => {
  const country_name = search_item.value;
  if (country_name === "") {
    alert("Please Enter Some valid Country Name");
    return;
  }

  // Show the loading spinner
  loading_spinner.style.display = "block";
  get_result.innerHTML = ""; // Clear any previous results

  const final_url = `https://restcountries.com/v3.1/name/${country_name}?fullText=true`;
  fetch(final_url).then((Response) => Response.json()).then((data) => {

    // console.log(data);

    get_result.innerHTML = `<div class="country_section">
<img src="${data[0].flags.png}" alt="Country Flag" class="country-image">
<h2 class="country-name">${data[0].name.common}</h2>
</div>

<div class="county-info">
<div class="entry1">
  <b>Capital: </b>
  <span class="cap_name common">${data[0].capital[0]}</span>
</div>
<div class="entry2">
  <b>Continent: </b>
  <span class="cont_name common">${data[0].continents[0]}</span>
</div>
<div class="entry3">
  <b>Population: </b>
  <span class="Population common">${data[0].population}</span>
</div>

<div class="entry4">
  <b>Currency: </b>
  <span class="currency common">${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
</div>

<div class="entry5">
  <b>Common Languages: </b>
  <span class="language common">${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
</div>

<div class="entry6">
  <a href="${data[0].maps.googleMaps}" target="_blank">See Location</a>
</div>
<div class="entry6 street">
  <a href="${data[0].maps.openStreetMaps}" target="_blank">Street Map</a>
</div>
</div>`;

    // Hide the loading spinner
    loading_spinner.style.display = "none";
  })
    .catch(() => {
      get_result.innerHTML = `<h3 class="error">Please Enter Valid Country Name.</h3>`;

      // Hide the loading spinner
      loading_spinner.style.display = "none";
    });
});
