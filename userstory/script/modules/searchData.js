import { API_KEY,API_URL, type, artist, title } from './variables.js';

export async function searchResultaten(data) {
    var mijnData = data.artObjects;
    const imageURLs = mijnData.map(artObject => artObject.webImage?.url) || 'https://via.placeholder.com/150'; //placeholder image
    const imageTitels =  mijnData.map(artObject => artObject.title);
    const longTitels =  mijnData.map(artObject => artObject.longTitle);
    const makersnamen = mijnData.map(artObject => artObject.principalOrFirstMaker);
    const objectNumbers = mijnData.map(artObject => artObject.objectNumber);


    console.log("hi" , imageURLs);

    let array = imageTitels.map((item, index) => {
        return {
            "image": imageURLs[index],
            "name": makersnamen[index],
            "title": imageTitels[index],
            "longTitel": longTitels[index],
            "objectNumber": objectNumbers[index]
        }
    })

    console.log("mijn Array:" , array);




    var ul = document.querySelector('main>ul');
    var lis = document.querySelectorAll('main>ul li');
    ul.style.display = "flex";
    lis.forEach(li => {
        li.remove(li);
    });

    const liHTML = array.map((item) => `
    <li>
        <a href="#object/${item.objectNumber}">
            <div>
                <h3>${item.title}</h3>
            </div>
            <button>
            <img src="${item.image}"
            alt="${item.longTitel}">
            </button>
        </a>
    </li>
`).join('');

    ul.innerHTML = liHTML;
    console.log("mijn ul:" , ul);
}