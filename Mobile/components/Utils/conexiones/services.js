const urlAllCountries = 'https://restcountries.com/v3.1/all';
const urlCountriesByName = 'https://restcountries.com/v3.1/name/';
const urlCountriesByContinent = 'https://restcountries.com/v3.1/region/';

// Todos los países
export async function fetchAllCountries() {
  try {
    const response = await fetch(urlAllCountries, {
      method: 'GET',
    });
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error({ error });
    alert('Ha ocurrido un error:', error);
  }
}

// Países de un continente en concreto
export async function fetchCountriesByContinent(continent) {
  try {
    const response = await fetch(urlCountriesByContinent + continent, {
      method: 'GET',
    });
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error({ error });
    alert('Ha ocurrido un error:', error);
  }
}

// Paises por nombre
export async function fetchCountriesByName(countryName) {
  try {
    const response = await fetch(urlCountriesByName + countryName, {
      method: 'GET',
    });
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error({ error });
    alert('Ha ocurrido un error:', error);
  }
}
