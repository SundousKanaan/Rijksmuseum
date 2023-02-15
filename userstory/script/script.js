const API_KEY = 'BI5yOkPW';
const API_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}`;
// const APIURL = `https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&ps=100.objectTypes=schilderij`;


const schilderij = 'schilderij';
async function fetchData (){
  const data = fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    const artObjectsCount = data.artObjects.length;
    console.log(artObjectsCount);

    Top5(data);
  })
}

function Top5(data){
  const top5ArtObjects = data.artObjects.slice(0, 5);
  const imageURLs = top5ArtObjects.map(artObject => artObject.webImage.url);
    console.log(imageURLs);


    // makers namen
    const rr = data.artObjects.map(artObject => artObject.principalOrFirstMaker);
    console.log(rr);

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
  console.log(listElement);



  const imageTitels = top5ArtObjects.map(artObject => artObject.title);
  console.log(imageTitels);

  var headerimgs = document.querySelectorAll ("header ul li img")

  imageTitels.forEach((imagetitel)=> {
    for(let i=0; i< headerimgs.length; i++){
      headerimgs[i].alt = imagetitel;
    }
  })

}


// const imageTitel = top5ArtObjects.map(artObject => artObject.title);
// console.log(imageTitel);



fetchData();





  // const top100ArtObjects = data.artObjects.slice(0, 100);
  // const filteredArtObjects = top100ArtObjects.filter(artObject => artObject.objectType === 'schilderij');
  // const imageURLs = filteredArtObjects.map(artObject => artObject.webImage.url);
  // console.log(top100ArtObjects);

