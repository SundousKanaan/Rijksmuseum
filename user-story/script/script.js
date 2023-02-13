const API_KEY = 'BI5yOkPW';
const API_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}`;

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const artObjectsCount = data.artObjects.length;
    const image =  data.artObjects[0].id;
    console.log(image);
    console.log(`There are ${artObjectsCount} artObjects in the Rijksmuseum API.`);
  })
//   .catch(error => console.error(error));

// fetch(API_URL)
//   .then(response => response.json())
//   .then(data => {
//     const artworks = data.artObjects.slice(0, 10);
//     artworks.forEach(artwork => {
//       console.log(artwork.title, artwork.webImage.url);
//     });
//   })