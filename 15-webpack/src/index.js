import _ from 'lodash';
import './style.css';
import { numberMax, numberMin } from '../../01-variable-types/main.js';
import { getRandomPassword, convertCurrency } from '../../03-functions/main.js';


function component() {

  const element = document.createElement("div");

  element.innerHTML = _.join(['Home work 15', 'webpack', 'Vladyslav Oksonenko', '<p>Go to console</p>'], " ")
  element.classList.add('hello');
  

  return element;
}

function importFunctions() {
  console.log("01-variable", numberMax, numberMin);
  console.log("03-functions", getRandomPassword(8));
  console.log("03-functions", convertCurrency("28uah"));
}

importFunctions();

document.body.appendChild(component());