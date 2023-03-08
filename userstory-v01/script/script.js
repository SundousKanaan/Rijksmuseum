// ps = The number of results per page.
// involvedMaker	 = Object needs to be made by this agent.
// toppieces = Only give works that are top pieces.
// material = The material of the object.
// artist = Sort results on artist (a-z).
// objecttype = Sort results on type.

const API_KEY = 'BI5yOkPW';
// const toppieces = 'true';

const type = '';
const artist = '';
const title = '';
const id = '';

import {loadingscherm} from "./modules/variables.js";
import * as variables from "./modules/variables.js";
console.log("hoi" , variables);

// type=schilderij
//  + `&${artist}` + `&${title}`

const API_schilderijen_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=100&&type=schilderij`;

async function fetchData() {
  displayLoading();

  const data = fetch(API_schilderijen_URL)
    .then(response => response.json())
    .then(data => {
      hideLoading();

      const artObjectsCount = data.artObjects.length;
      // console.log("data artObjects length is", artObjectsCount, data.artObjects);

      const artErray = data.artObjects.map(artObject =>
        ["title" = artObject.title, (artObject.id), (artObject.webImage.url), (artObject.principalOrFirstMaker), (artObject.longTitle)]);
    
      console.log(artErray);
    

      headerfotos(data);

    })

  .catch((error) => {
     console.error('Error:', error);
     })
}



const API_URL = `https://www.rijksmuseum.nl/api/nl/collection/${id}?&key=${API_KEY}&ps=1000&${type}&${artist}&${title}`;

async function fetch_artErray_Data() {
  const data = fetch(API_URL)
    .then(response => response.json())
    .then(data => {


      TOP10(data);
    })
}


  // erray van mijn elementen
  // const artErray = data.artObjects.map(artObject =>
  //   [(artObject.title), (artObject.id), (artObject.webImage.url), (artObject.principalOrFirstMaker), (artObject.longTitle)]);

  // console.log(artErray);

  // hoi(artErray);


// function hoi() {
//   console.log("hoi")
// }




// showing loading
function displayLoading() {
  loadingscherm.classList.add("display");

  // to stop loading after some time
  setTimeout(() => {
    loadingscherm.classList.remove("display");
  }, 5000);
}

// hiding loading 
function hideLoading() {
  loadingscherm.classList.remove("display");
}



async function headerfotos(data) {
  const top5ArtObjects = data.artObjects.slice(0, 5);
  const imageURLs = top5ArtObjects.map(artObject => artObject.webImage.url);
  const listElement = document.createElement('ul');

  imageURLs.forEach((imageURL) => {
    const itemElement = document.createElement('li');
    const imageElement = document.createElement('img');

    imageElement.src = imageURL; //img


    itemElement.appendChild(imageElement); //li
    listElement.appendChild(itemElement); //ul

    const headerElement = document.querySelector('header');
    headerElement.appendChild(listElement);
  });

  const imageTitels = top5ArtObjects.map(artObject => artObject.title);
  const makernaamen = data.artObjects.map(artObject => artObject.principalOrFirstMaker);

  var headerimgs = document.querySelectorAll("header ul li img")

  imageTitels.forEach((imagetitel) => {
    for (let i = 0; i < headerimgs.length; i++) {
      headerimgs[i].alt = imagetitel;
    }
  })
}


function TOP10(data) {
  const top10ArtObjects = data.artObjects.slice(0, 10);
  const imageURLs = top10ArtObjects.map(artObject => artObject.webImage.url);
  const makernaamen = top10ArtObjects.map(artObject => artObject.principalOrFirstMaker);
  const imageTitels = top10ArtObjects.map(artObject => artObject.title);
  const objectsID = data.artObjects.map(artObject => artObject.id);


  let array = imageURLs.map((item, index) => {
    return { 
    "id": objectsID[index],
    "image": imageURLs[index], 
    "name": makernaamen[index], 
    "title": imageTitels[index]
  }
  })

  console.log(array)

  const listElement = document.createElement('ul');

  array.forEach((item) => {
    const aElement = document.createElement('a');
    const itemElement = document.createElement('li');
    const imageElement = document.createElement('img');
    const divElement = document.createElement('div');
    const h3Element = document.createElement('h3');

    imageElement.src = item.image; //img
    imageElement.alt = item.title + "van" + item.name;

    // aElement.herf= item.id ;
    aElement.herf=  "sss" ;


    h3Element.innerText = item.title;

    divElement.appendChild(h3Element); //h3
    aElement.appendChild(divElement); // li button section
    aElement.appendChild(imageElement); //img
    itemElement.appendChild(aElement); //button
    listElement.appendChild(itemElement); //ul
  })

  const Top10section = document.querySelector('main > section:first-of-type');
  Top10section.appendChild(listElement);
}

fetchData();
fetch_artErray_Data();
