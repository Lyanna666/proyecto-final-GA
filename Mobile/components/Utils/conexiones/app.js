import {
  fetchAllCountries,
  fetchCountriesByName,
  fetchCountriesByContinent,
} from './services.js';
import { startLoading, stopLoading } from './components/loading.js';

function addCountriesHTML(countries) {
  removeCountriesHTML();

  countries.forEach(country => {
    const htmlString =
      '<picture><img src="' +
      country.flags.svg +
      '" alt="' +
      country.name.official +
      '"></picture> <p>' +
      country.name.common +
      '</p>';

    const divPais = document.createElement('div');
    divPais.className = 'div-pais';
    divPais.id = country.cca2;
    divPais.innerHTML = htmlString;

    const container = document.querySelector('.div-paises');

    container.append(divPais);
  });
}

function removeCountriesHTML() {
  const container = document.querySelector('.div-paises');
  container.replaceChildren();
}

function getAllCountries() {
  startLoading();
  fetchAllCountries()
    .then(countries => {
      if (countries.length > 0) {
        console.log('Paises:', countries);
        addCountriesHTML(countries);
      } else {
        countries = null;
        alert(
          'Ha ocurrido un error al cargar los países, vuelva a intentarlo más tarde.',
        );
      }
      stopLoading();
    })
    .catch(e => {
      console.log(e);
      alert('Error al cargar países: ' + e);
      stopLoading();
    });
}

function getCountriesByContinent(continent) {
  startLoading();
  fetchCountriesByContinent(continent)
    .then(countries => {
      if (countries.length > 0) {
        console.log('Paises por continente', continent, ':', countries);
        addCountriesHTML(countries);
      } else {
        countries = null;
        alert(
          'Ha ocurrido un error al cargar los países, vuelva a intentarlo más tarde.',
        );
      }
      stopLoading();
    })
    .catch(e => {
      console.log(e);
      alert('Error al cargar países: ' + e);
      stopLoading();
    });
}

function getCountriesByName(name) {
  startLoading();
  fetchCountriesByName(name)
    .then(countries => {
      if (countries.length > 0) {
        console.log('Paises por nombre', name, ':', countries);
        addCountriesHTML(countries);
      } else {
        countries = null;
        alert('No se han encontrado países con el nombre ' + name + '.');
      }
      stopLoading();
    })
    .catch(e => {
      console.log(e);
      alert('Error al cargar países: ' + e);
      stopLoading();
    });
}

function onClickFilter() {
  const selectedContinent = document.querySelector('select').value;
  console.log(selectedContinent);

  if (selectedContinent != null) {
    getCountriesByContinent(selectedContinent);
  } else {
    alert('Selecciona un continente.');
  }
}

function onClickName() {
  const name = document.querySelector('input').value;
  console.log(name);
  if (name != null || name.length > 0) {
    getCountriesByName(name);
  } else {
    alert('Escribe el nombre del país');
  }
}

document.addEventListener('readystatechange', () => {
  getAllCountries();

  const buttonAllCountries = document.querySelector('#btn-all-countries');
  buttonAllCountries.addEventListener('click', getAllCountries);

  const buttonFilters = document.querySelector('#btn-filter');
  buttonFilters.addEventListener('click', onClickFilter);

  const buttonName = document.querySelector('#btn-name');
  buttonName.addEventListener('click', onClickName);
});
