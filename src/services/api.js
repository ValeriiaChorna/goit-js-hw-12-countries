const URL = 'https://restcountries.eu/rest/v2/name/';

const getCountry = country =>
  fetch(URL + country)
    .then(response => response.json())
  // .then(country => Array.from(country))
    .catch(console.log('Error!'));


export { getCountry };
