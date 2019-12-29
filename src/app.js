import debounce from 'lodash.debounce';

import { PNotify, pWarning } from './utils/pnotify';
import { getCountry } from './services/api';
import { refs } from './utils/refs';

//getCountry('ukr').then(data => console.log(data));

refs.input.addEventListener('input', debounce(getInputValue, 500));

function getInputValue(event) {
  event.preventDefault();
  const { target } = event;
  getCountry(target.value)
    .then(country => {
      console.log('TCL: getInputValue -> country.length', country.length);
      console.log('TCL: getInputValue -> country', country);
    })
    .catch(error => console.error(error));
}

function updateHtml(data) {
  refs.output.insertAdjacentHTML('afterbegin', data);
}
