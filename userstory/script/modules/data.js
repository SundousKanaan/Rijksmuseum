import { fetchData, fetchObjectDetails, fetchZoekURL } from "./fetch.js";
import { displayLoading } from "./display.js";
import { API_KEY,API_URL, type, artist, title } from './variables.js';
import { searchResultaten } from "./searchData.js";

export async function headerfotos(data) {
    const API_URL = `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=100&&type=schilderij&imgonly=true`;
    var data = await fetchData(API_URL, API_KEY);
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

    var headerimgs = document.querySelectorAll("header ul li img")

    imageTitels.forEach((imagetitel) => {
        for (let i = 0; i < headerimgs.length; i++) {
            headerimgs[i].alt = imagetitel;
        }
    })
}

headerfotos();


export async function TOP10(data) {
    var data = await fetchData(API_URL, API_KEY);
    const top10ArtObjects = data.artObjects.slice(0, 10);
    const imageURLs = top10ArtObjects.map(artObject => artObject.webImage.url);
    const makernaamen = top10ArtObjects.map(artObject => artObject.principalOrFirstMaker);
    const imageTitels = top10ArtObjects.map(artObject => artObject.title);
    const objectNumber = data.artObjects.map(artObject => artObject.objectNumber);


    let array = imageURLs.map((item, index) => {
        return {
            "image": imageURLs[index],
            "name": makernaamen[index],
            "title": imageTitels[index],
            "objectNumber": objectNumber[index]
        }
    })

    // console.log(array)

    const listElement = document.createElement('ul');

    array.forEach((item) => {
        const aElement = document.createElement('a');
        const itemElement = document.createElement('li');
        const imageElement = document.createElement('img');
        const divElement = document.createElement('div');
        const h3Element = document.createElement('h3');

        itemElement.dataset.objectNumber = item.objectNumber;
        imageElement.src = item.image; //img
        imageElement.alt = item.title + "van" + item.name;

        aElement.href = "#object/" + item.objectNumber;
        // console.log(aElement.href);


        h3Element.innerText = item.title;

        divElement.appendChild(h3Element);      // div h3
        aElement.appendChild(divElement);       // li a div
        aElement.appendChild(imageElement);     //a img
        itemElement.appendChild(aElement);      //li a
        listElement.appendChild(itemElement);       //ul li
    })

    const Top10section = document.querySelector('main > section:first-of-type');
    Top10section.appendChild(listElement);

    // console.log("top10 function aan het werken");
}

TOP10();




let article = document.querySelector('body>article');

export async function get_details(objectNumber) {

    const obj_data = await fetchObjectDetails(objectNumber)

    // console.log("done fetch obj data", obj_data.artObject)

    let objDetails = obj_data.artObject;
    let description = objDetails.description;
    if (description === null) {
        description = "Er is momenteel geen beschrijving beschikbaar voor dit werk, informatie zal worden bijgewerkt zodra deze beschikbaar is.";
    }

    article.style.display = "grid";
    // article.setAttribute(id, "test" `${objDetails.objectNumber}`);

    article.innerHTML =
    `
           <button></button>
           <img src="${objDetails.webImage.url}"
           alt="${objDetails.longTitle}">
        <a herf=":history.go(-1)">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: none;
                                stroke: #ffffff;
                                stroke-linecap: round;
                                stroke-linejoin: round;
                                stroke-width: 2px;
                            }
                        </style>
                    </defs>
                    <title></title>
                    <g id="chevron-bottom">
                        <line class="cls-1" x1="16" x2="7" y1="20.5" y2="11.5"></line>
                        <line class="cls-1" x1="25" x2="16" y1="11.5" y2="20.5"></line>
                    </g>
               </g>
            </svg>
          </a>

         <section>
            <div>
                <h2>${obj_data.artObject.title}</h2>
                <p> Kunstenaar: ${obj_data.artObject.principalMaker}</p>
            </div>
            <h3>Description:</h3>
            <p>${description}</p>
        </section>
   `

    return article;

}


export async function getZoekenData(searchQuery){
    var Alldata = await fetchData(API_URL, API_KEY);
    // Array maken van alle makers namen en een Array van alle titles
    var AllMakersArray = Alldata.artObjects.map(artObject => artObject.principalOrFirstMaker)
    var AllTitlesArray = Alldata.artObjects.map(artObject => artObject.title)

    // Maak een nieuwe arrays zonder herhalen in
    var makersArray = [...new Set(AllMakersArray)];
    var titlesArray = [...new Set(AllTitlesArray)];

    var zoeken = '';

    if(makersArray.findIndex(element =>element.includes(searchQuery))){
        zoeken = 'involvedMaker=' + searchQuery;
        var data = await fetchZoekURL(API_URL,zoeken);
        console.log("hoy" , data.artObjects);
        searchResultaten(data);
    }

    else if(titlesArray.findIndex(element => element.includes(searchQuery))){
        zoeken = 'title=' + searchQuery;
        var data = await fetchZoekURL(API_URL,zoeken);
    }

    else{
        console.log("none");
    }

}

// getZoekenData("anoniem");




























































    // const listElement = document.createElement('ul');

    // console.log("ds")
    // const div_box = document.createElement('div');
    // const img_buttonElement = document.createElement('button');
    // const terug_buttonElement = document.createElement('button');
    // const imageElement = document.createElement('img');
    // const divElement = document.createElement('div');
    // const h3Element = document.createElement('h3');

    // imageElement.src = data.artObject.webImage.url; //img

    // img_buttonElement.appendChild(imageElement);
    // div_box.appendChild(img_buttonElement);
    // article.innerHTML = div_box;




//     article.innerHTML = `
//     <article>
//         <button>
//             <img src="`${data.artObject.webImage.url}`"
//                 alt="">
//         </button>

        // <button>
        //     <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
        //         <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        //         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        //         <g id="SVGRepo_iconCarrier">
        //             <defs>
        //                 <style>
        //                     .cls-1 {
        //                         fill: none;
        //                         stroke: #ffffff;
        //                         stroke-linecap: round;
        //                         stroke-linejoin: round;
        //                         stroke-width: 2px;
        //                     }
        //                 </style>
        //             </defs>
        //             <title></title>
        //             <g id="chevron-bottom">
        //                 <line class="cls-1" x1="16" x2="7" y1="20.5" y2="11.5"></line>
        //                 <line class="cls-1" x1="25" x2="16" y1="11.5" y2="20.5"></line>
        //             </g>
        //         </g>
        //     </svg>
        // </button>
//     </article>
// `
