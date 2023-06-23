import './style.css';

const listItem = document.querySelector('#listItem');
const input = document.querySelector('#country');
const countries = ['HAITI', 'CANADA', 'FRANCE', 'ESPAGNE', 'COLOMBIE', 'ARGENTINA'];
const myList = document.createElement('li');
const countriesList = [];

const getCountries = () => {
  const query = input.value.toUpperCase();
  if (query.length > 0) {
    countries.forEach((country) => {
      if (query === country.charAt(0)) {
        countriesList.push(myList);
        // myList.innerText += ' ';
        myList.innerText = countriesList;
        listItem.appendChild(myList);
        console.log(countriesList);

        myList.addEventListener('click', () => {
          input.value += ' ';
          input.value = country;
          listItem.removeChild(myList);
          console.log(country);
        });
      } else {
        listItem.removeAttribute(myList);
      }
    });
  } else {
    listItem.removeChild(myList);
  }
};

input.addEventListener('input', getCountries);