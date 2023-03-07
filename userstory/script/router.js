import './routie/routie.js';
import { fetchData, fetchObjectDetails } from './modules/fetch.js';
// import { displayLoading, hideLoading } from './modules/display.js';
import { get_details } from './modules/data.js';
import { API_URL, API_KEY, type, artist, title , objectNumber} from './modules/variables.js'




export async function onRouteChanged(data) {
    routie({
        

        'object/:objectNumber': async function (objectNumber) {
            var item_details = get_details(objectNumber);
            console.log("item_details", item_details);
        }
    })
}

const sdata = await fetchData(API_URL, API_KEY, type, artist, title);



        // '/:id': async function (id) {
        //     console.log("id", id);

        //     console.log("data", sdata);

        //     const filteredData = sdata.artObjects.find(schilderij => schilderij.id === id);
        //     // const allItemElements = document.querySelectorAll("main>section:first-of-type ul li");
        //     // const allItemElementsArray = [...allItemElements]
        //     //    const filteredItemElement =  allItemElementsArray.find(item => item.dataset.id === id)
        //     console.log(filteredData);

        //     details();
        // }



// function renderArticle(data) {
//     document.querySelector('div')
//     div.innerHTML = `
//         <article>
//             <h1>${data.title}</h1>
//         </article>
//     `
// }