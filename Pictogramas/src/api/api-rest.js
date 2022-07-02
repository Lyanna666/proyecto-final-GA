// API REST
// ------------------------------------------------------------

const urlGlobal = 'https://api.arasaac.org/api/pictograms';

const urlAll = '/all/';
const urlBest = '/bestsearch/';
const urlSearch = '/search/';

export async function fetchAllPictograms(language) {
  console.log(urlGlobal + urlAll + language);

  try {
    const response = await fetch(urlGlobal + urlAll + language, {
      method: 'GET',
    });
    const pictograms = await response.json();
    return pictograms;
  } catch (error) {
    console.error({ error });
    alert('Ha ocurrido un error:', error);
  }
}

export async function fetchAllPictogramsBySearch(search, language) {
  /* console.log(urlAll + language); */

  try {
    const response = await fetch(urlGlobal + language + urlSearch + search, {
      method: 'GET',
    });
    const pictograms = await response.json();
    return pictograms;
  } catch (error) {
    console.error({ error });
    alert('Ha ocurrido un error:', error);
  }
}
