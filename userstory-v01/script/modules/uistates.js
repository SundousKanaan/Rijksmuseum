import * as variables from "./modules/variables.js";


// showing loading
function displayLoading() {
  loadingscherm.classList.add("display");

  // to stop loading after some time
  setTimeout(() => {
    variables.loadingscherm.classList.remove("display");
  }, 5000);
}

// hiding loading 
function hideLoading() {
  variables.loadingscherm.classList.remove("display");
}

export {displayLoading, hideLoading};