import * as variables from './variables.js';

var body = document.body;

export async function displayLoading() {

  variables.loadingscherm.classList.add("display");
  body.classList.add("hidden");

  // to stop loading after some time
  setTimeout(() => {
    variables.loadingscherm.classList.remove("display");
    body.classList.remove("hidden");
  }, 5000);

}

export function hideLoading() {
  variables.loadingscherm.classList.remove("display");
}

