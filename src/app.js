import debounce from 'lodash.debounce';

import { PNotify, pWarning } from './utils/pnotify';
import { getCountry } from './services/api';
import { refs } from './utils/refs';
import templateList from './utils/templates/list-item.hbs';
import templateCard from './utils/templates/country-description.hbs';

//getCountry('ukr').then(data => console.log(data));

refs.input.addEventListener('input', debounce(getInputValue, 500));

function getInputValue(event) {
  event.preventDefault();
  const { target } = event;
  if (event.target.value === "") {
    return;
  }
  getCountry(target.value).then(country => {
    if (country.length === 1) {
      updateHtml(`${templateCard(country)}`);
    }
    if(country.length > 1 & country.length <= 10){
        updateHtml(`${templateList(country)}`);
    }
    if(country.length > 10){
        pWarning();
    }
    //else{pWarning('Sorry, we can\'t find, try again!')};
  }).catch(error => console.error(error));;
}

function updateHtml(data) {
  refs.output.insertAdjacentHTML('afterbegin', data);
}
