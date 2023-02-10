var iframeButtons = document.querySelectorAll("main aside ul li button")
var selectedLi = document.querySelector("main aside ul li")
var kleinIframe = document.querySelector("main aside ul li iframe")
var groterIframe = document.querySelector("main > iframe")
var introSection = document.querySelector("main > section")
var siteLink = document.querySelector("main > a")


for (let i = 0; i < iframeButtons.length; i++) {
    iframeButtons[i].addEventListener("click", get);
}


function get() {
    //     /* de button waarop geklikt is in de variabele 'clickebutton' opslaan */
    //     // let clickebutton = event.target;

    //     // clickebutton = clickebutton.closest("li");

    //     // groterIframe.src = "";

    // if(selectedLi.classList.contains("open")){
    // selectedLi.classList.remove("open");
    // }

    for (let i = 0; i < iframeButtons.length ; i++) {

        groterIframe.src = kleinIframe.src;
        introSection.remove();
        siteLink.href = kleinIframe.src;
        siteLink.classList.add("move");
        selectedLi.classList.add("open");

        console.log(kleinIframe.src);
    }

    // evt.target.src = kleinIframe.src

    /* de class liked aan de fish toevoegen */
    /* en weer verwijderen als er nog een keer geklikt wordt */
    // dekaart.classList.toggle("liked");
}