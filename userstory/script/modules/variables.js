export const API_KEY = 'BI5yOkPW';
export const article = document.querySelector('body > article');



// export const API_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=1000`;

export const API_schilderijen_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=100&&type=schilderij`;

export const loadingscherm = document.querySelector("body > div");
export var type = '';;
export var artist = '';
export var id = '';
export var title = '';
export var objectNumber = '';

export const API_URL = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?&key=${API_KEY}&ps=1000&${type}&${artist}&${title}`;

// export const API_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=1000&${type}&${artist}&${title}`;









