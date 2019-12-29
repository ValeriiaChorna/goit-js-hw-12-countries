const URL = 'https://restcountries.eu/rest/v2/name/';

const getCountry = country => {
  return fetch(URL + country)
    .then(response => response.json())
    .catch(console.log('Error!'));
};

export { getCountry };
