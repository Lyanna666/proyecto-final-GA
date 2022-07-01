// API REST
// ------------------------------------------------------------

const urlAll = 'https://api.arasaac.org/api/pictograms/all/';

export async function fetchAllPictograms(language) {
  /* console.log(urlAll + language); */

  try {
    const response = await fetch(urlAll + language, {
      method: 'GET',
    });
    const pictograms = await response.json();
    return pictograms;
  } catch (error) {
    console.error({ error });
    alert('Ha ocurrido un error:', error);
  }
}

export default fetchAllPictograms;
