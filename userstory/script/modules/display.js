import * as variables from './variables.js';

export async function displayLoading() {

  variables.loadingscherm.classList.add("display");

  // to stop loading after some time
  setTimeout(() => {
    variables.loadingscherm.classList.remove("display");
  }, 5000);

}

export function hideLoading() {
  variables.loadingscherm.classList.remove("display");
}

