var iframeButtons = document.querySelectorAll("main aside ul li button")
var elementArray = Array.from(iframeButtons); 
//var elementArray = Array.from(iframeButtons); = var iframeButtons = [...document.querySelectorAll("main aside ul li button")];

var selectedLi = document.querySelectorAll("main aside ul li")
var kleinIframe = document.querySelectorAll("main aside ul li iframe")
var groterIframe = document.querySelector("main > iframe")
var introSection = document.querySelector("main > section")
var siteLink = document.querySelector("main > a")


elementArray.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        for(let i=0; i < selectedLi.length; i++)
        if(selectedLi[i].classList.contains("open")){
            selectedLi[i].classList.remove("open");
        }

        kleinIframe[index].src;
        var iframe
        iframe = element.parentNode.lastElementChild;
        groterIframe.src = iframe.src;
        siteLink.href = iframe.src;
        siteLink.classList.add("move");
        iframe.parentNode.classList.add("open");

        console.log(iframe);
    });
});