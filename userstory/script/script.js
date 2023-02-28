
import { fetchData } from './modules/fetch.js';
import { onRouteChanged } from './router.js';
import { displayLoading } from './modules/display.js'
let Alldata;                             // Declare a variable named "Alldata" to store fetched data.

// Eventlisteners
window.addEventListener('hashchange', function () {
  onRouteChanged(Alldata);               // De functie onRouteChanged wordt aangeroepen en de Alldata wordt meegegeven
}, false);

displayLoading();

async function dataDisplay(){
  try {
    const data = await fetchData();     // Call the fetchData function to fetch data from the API.
    Alldata = data;                     // Assign the fetched data to the Alldata variable.
    console.log(Alldata);

  }
    catch (error) {                     // Add error handling for any errors that occur during the fetch operation.
        console.log(error); 
    }
}