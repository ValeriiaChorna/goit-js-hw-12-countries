const URL = 'https://restcountries.eu/rest/v2/name/';

const getCountry = country =>
  fetch(URL + country)
    .then(response => console.log(response.json()))
   //.then(data => console.log(JSON.stringify(data)))
    .catch(console.log('Error!'));

export { getCountry };
