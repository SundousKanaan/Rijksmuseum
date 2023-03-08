import { API_URL, API_KEY, type, artist, title } from './variables.js';
import * as display from './display.js';
import { TOP10 , headerfotos , get_details, getZoekenData} from './data.js';

// async function fetchData(API_URL, API_KEY) {

//     const res = await fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//       // console.log('fetch resultaten: ' , data);

//       TOP10(data);
//     })

//     const API_schilderijen_URL =`https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=100&&type=schilderij`;
//     fetch(API_schilderijen_URL)
//         .then(response => response.json())
//         .then(data => {
//           headerfotos(data);
//     })
// }

// export async function fetchData(API_URL, API_KEY) {
//   const response1 = await fetch(API_URL);
//   const data1 = await response1.json();
//   console.log('fetch resultaten 1:', data1);

//   const API_schilderijen_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=100&&type=schilderij`;
//   const response2 = await fetch(API_schilderijen_URL);
//   const data2 = await response2.json();
//   console.log('fetch resultaten 2:', data2);

//   TOP10(data1);
//   headerfotos(data2)
//   return [data1, data2];
// }


export async function fetchData(API_URL, API_KEY) {
  try{
    const response1 = await fetch(API_URL);
    const data1 = await response1.json();
    
    return data1;
  } 
  catch (error) {
    console.error('Error fetching data:', error);
    // handle the error, e.g. show an error message to the user
  }
}

export async function fetchZoekURL(API_URL,zoeken) {
  // const ALLAPI_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=1000&involvedMaker=${searchQuery}`;
  const ALLAPI_URL = `${API_URL}&${zoeken}`;

  console.log('fetchZoekURL', ALLAPI_URL);

  try {
    const response = await fetch(ALLAPI_URL);
    const data = await response.json();
    // console.log('fetchZoekURL', data);
    return data;
  } catch (error) {
    // console.log('fetchZoekURL error', error);
    throw error;
  }
}




export async function fetchObjectDetails(objectNumber) { 

  try{
    const objectDetails_URL = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?&key=${API_KEY}&ps=1000&`;
    const res = await fetch(objectDetails_URL)
    const data = res.json()
    return data
  } catch (error) {
    // console.log('fetchZoekURL error', error);
    throw error;
  }
}


// async function fetchZoekURL(searchQuery) { 

//   const API_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=1000&involvedMaker=${searchQuery}`;
//   const res = await fetch(API_URL)
//   const data = res.json()
//   return data

// }


















// export {fetchData, fetchObjectDetails, fetchZoekURL};




    // const API_URL = `https://www.rijksmuseum.nl/api/nl/collection/${id}?&key=${API_KEY}&ps=1000&${type}&${artist}&${title}`;

    // const data = await fetch(API_URL)
    //   .then(response => response.json())
    //   .then(data => {
  
    //     const artObjectsCount = data.artObjects.length;
    //     console.log("data artObjects length is", artObjectsCount, data.artObjects);
  
    //     // erray van mijn elementen
    //     // const artObjectsErray = data.artObjects.map(artObject => 
    //     //   [(artObject.title) , (artObject.id) , (artObject.webImage.url) , (artObject.principalOrFirstMaker) , (artObject.longTitle)]);
  
    //     //   console.log(artObjectsErray.slice(0,3));
    //     // console.log(artObjectsErray);
  
    //     // const API_schilderijen_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=100&&type=schilderij`;
    //     // fetch(API_schilderijen_URL)
    //     //   .then(response => response.json())
    //     //   .then(data => {
    //     //     console.log(data.artObjects);
  
    //     //     headerfotos(data);
    //     //   })
  
    //     TOP10(data);
        
    //   })