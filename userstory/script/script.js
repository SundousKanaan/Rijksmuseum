const API_KEY = 'BI5yOkPW';
const API_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}`;
// const API_URL = `https://www.rijksmuseum.nl/api/nl/collection?key=BI5yOkPW&ps=100.objectTypes=schilderij`;

async function fetchData (){
  const data = fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const artObjectsCount = data.artObjects.length;

    console.log(artObjectsCount);

    APIdata(data);
  })
}



function APIdata(data){
  const top5ArtObjects = data.artObjects.slice(0, 5);
  const imageURLs = top5ArtObjects.map(artObject => artObject.webImage.url);
    console.log(imageURLs);    
    const listElement = document.createElement('ul');

    imageURLs.forEach((imageURL) => {
      
    const itemElement = document.createElement('li');
    const imageElement = document.createElement('img');

      imageElement.src = imageURL;
      itemElement.appendChild(imageElement);
      listElement.appendChild(itemElement);
    
    const headerElement = document.querySelector('header');
    headerElement.appendChild(listElement);
  });

  console.log(listElement);

}



fetchData();





  // const top100ArtObjects = data.artObjects.slice(0, 100);
  // const filteredArtObjects = top100ArtObjects.filter(artObject => artObject.objectType === 'schilderij');
  // const imageURLs = filteredArtObjects.map(artObject => artObject.webImage.url);
  // console.log(top100ArtObjects);

