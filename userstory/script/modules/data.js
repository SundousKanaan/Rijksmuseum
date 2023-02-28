import { fetch_objectDetails } from "./fetch.js";
import {  displayLoading } from "./display.js"


export async function headerfotos(data) {
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

    // .catch((err) => { console.error('Error:', err)});
}


export function TOP10(data) {
    const top10ArtObjects = data.artObjects.slice(0, 10);
    const imageURLs = top10ArtObjects.map(artObject => artObject.webImage.url);
    const makernaamen = top10ArtObjects.map(artObject => artObject.principalOrFirstMaker);
    const imageTitels = top10ArtObjects.map(artObject => artObject.title);
    const objectsID = data.artObjects.map(artObject => artObject.id);
    const objectNumber = data.artObjects.map(artObject => artObject.objectNumber);


    let array = imageURLs.map((item, index) => {
        return {
            "id": objectsID[index],
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
}


var article = document.querySelector('body>article');

export async function get_details(objectNumber) {

    // displayLoading();
    console.log("get data for obj" + objectNumber)
    const obj_data = await fetch_objectDetails(objectNumber)

    console.log(obj_data)
    console.log("done fetch obj data", obj_data.artObject)

    var objDetails = obj_data.artObject;
    var description = objDetails.description;
    if (description === null) {
        description = "Er is momenteel geen beschrijving beschikbaar voor dit werk, informatie zal worden bijgewerkt zodra deze beschikbaar is.";
    }

    article.style.display = "grid";
    // article.setAttribute(id, "test" `${objDetails.objectNumber}`);

    article.innerHTML =
    `
           <button>
            <img src="${objDetails.webImage.url}"
                alt="${objDetails.longTitle}">
            </button>

        <a herf="#object/">
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
