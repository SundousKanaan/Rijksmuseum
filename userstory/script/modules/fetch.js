import { API_URL, API_KEY, id, type, artist, title } from './variables.js';
import * as display from './display.js';
import { TOP10 , headerfotos , get_details} from './data.js';

async function fetchData(API_URL, API_KEY, id, type, artist, title) {

    const res = await fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        TOP10(data)

    })
    const API_schilderijen_URL =`https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=100&&type=schilderij`;
    fetch(API_schilderijen_URL)
        .then(response => response.json())
        .then(data => {
            headerfotos(data);
        })

    // return data;
}



async function fetchArtErrayData(API_KEY, id, type, artist, title) {
  const API_URL = `https://www.rijksmuseum.nl/api/nl/collection/${id}?&key=${API_KEY}&ps=1000&${type}&${artist}&${title}`;

  const res = fetch(API_URL)
    .then(response => response.json())
    .then(data => {

      display.TOP10(data);
    })
    return res.json()
}

async function fetch_objectDetails(objectNumber) { 

    const objectDetails_URL = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?&key=${API_KEY}&ps=1000&`;
    const res = await fetch(objectDetails_URL)
    const data = res.json()
    return data
  }


export {fetchData, fetchArtErrayData, fetch_objectDetails};




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