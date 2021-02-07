fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
        <h3 class = "country-name">${country.name}</h3>
        <p class="capital">${country.capital}</p>
        <button onclick="displayCountryDetail('${country.name}')">Detail</button>
        `;
        countriesDiv.appendChild(countryDiv);
        countryDiv.innerHTML = countryInfo;
    }
}
const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));

}
const renderCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area}</p>
    <p>Capital: ${country.capital}</p>
    <p>Region: ${country.region}</p>

    <img src = "${country.flag}">
    `
}