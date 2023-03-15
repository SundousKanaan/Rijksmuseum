# Week 1: Hellooo

## 1. Visitekaartje

### Mijn gekozen idee

Ik hou van japan en haar cultuur, dus ik heb gekozen om mijn eigen popje maken en de japanse style gebruiken. Met spelen met CSS achtergrond heb ik alle animaties gemaakt, maar de popje zelf heb ik het op photoshop gemaakt.

[Mijn Visitekaartje](https://sundouskanaan.github.io/web-app-from-scratch-2223/visitekaartje/index.html)

### HTML/CSS/JS Breakdown


## 2. Squadpagina

### Description

Een single-page website waarop ik de visitekaartjes van mijn team laat zien. Ik heb rekening gehouden met mogelijke toekomstige verbeteringen, zoals het alleen weergeven van kaarten als het team uit meer dan vijf personen bestaat.

***

We waren 4 mannen met D namen en ik, dus hebben we S4D als een naam gekozen.

Ik had tijd over toen ik mijn visitekaartje af had, dus heb ik de squadpagina gecodeerd en iframes gebruikt om het werk van mijn groepje te verzamelen. 

Ik heb met arrays gewerkt om alle elementen te activeren in plaats van elk element apart te benaderen.

[Squadpagina](https://sundouskanaan.github.io/web-app-from-scratch-2223/S4D/index.html)

JavaScript:

        var iframeButtons = document.querySelectorAll("main aside ul li button")
        var elementArray = Array.from(iframeButtons); 


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
        
---

# Week 2 - Hello API

## 1. Pick a User Story and sketch the User Interface

*  papier schets

**Home pagina schets 1:** De naam van de museum gaat met animatie letter per letter met een schilderij in.

![ home-schets1](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/home-schets1.png?raw=true)

**Home pagina schets 2:**  Een schilderijencarrousel op de achtergrond waarbij de pagina de volledige hoogte van 100vh inneemt en alle elementen in de header geplaatst zijn.

![ home-schets2](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/home-schets2.png?raw=true)

**Zoekpagina:** De gebruiker kan zoeken naar verschillende waarden, waaronder objecttype en kunstenaarsnaam. 
<br> Daarnaast is er een lijst beschikbaar van de top 10 objecten. Zodra de gebruiker begint te zoeken, verschijnen de zoekresultaten in een lijst en verplaatst de lijst met de top 10 objecten naar beneden.

![ zoeken-schets](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/zoeken-schets.png?raw=true)
![ resultaten-schets](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/resultaten-schets.png?raw=true)

**Details pag** Er staat een foto van het object op de achtergrond met de bijbehorende data. De gebruiker kan op de foto klikken om de volledige foto te bekijken.

![ resultaten-schets](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/resultaten-schets.png?raw=true)


**Flow schets** 

![ flow schets](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/flow-schets.png?raw=true)

***

*  hi-fi versie

  Dark mode

![ prototype-darkmode](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/prototype-darkmode.png?raw=true)


  Light mode

![ prototype-lightmode](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/prototype-lightmode.png?raw=true)


***


*  Sketch User Flow in a Wireflow

![ flow](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/flow.png?raw=true)

## 2. Loading data from the API and build the User Interface

Ik kon de algemene API-link ophalen en de directe data verkrijgen, maar ik was nog niet in staat om de link met variabelen correct op te halen.
 
<br>Ik heb de data van de eerste 5 schilderijen opgehaald voor mijn header en de top 10 objecten opgehaald voor mijn top 10 carrousel. Vervolgens heb ik met behulp van JavaScript alle nodige HTML-elementen gemaakt.

            async function fetchData(API_URL, API_KEY, id , type , artist , title, schilderij ) {

                const res = await fetch(API_URL)
                const data = await res.json()
                TOP10(data)

                const API_schilderijen_URL =
                `https://www.rijksmuseum.nl/api/nl/collection?&key=${API_KEY}&ps=100&&type=schilderij`;
                fetch(API_schilderijen_URL)
                    .then(response => response.json())
                    .then(data => {
                        headerfotos(data);
                    })
                    .catch((err) => { console.error('Error:', err)});
                return data
            }

## 3. Add feedback to the User Interface and test

*  UI states

Ik heb alleen een error state en een loading state als UI-states. Aangezien er geen favorietenpagina is in mijn app, kan ik de lege status niet gebruiken.

**Loading state:** 

Schets 1: Een afbeelding van een object verschijnt blok voor blok, of er verschijnen meerdere afzonderlijke objectafbeeldingen na elkaar.

![ loading-state-schets1](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/loading-state-schets1.png?raw=true)

Schets 2: De naam van het museum verschijnt met daaronder een laadlijn.

![ loading-state-schets2](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/loading-state-schets2.png?raw=true)


**Error state:** 

Gewoon een symbole van een schilderij met de type error 

![ error-state-schets](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/error-state-schets.png?raw=true)

**hi-fi versie**

![ ui-states](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/ui-states.png?raw=true)

**Loading:** Ik heb in het script.js bestand de loading-functie ( displayLoading() ) opgeroepen om te werken tijdens de gegevens fetchen.

**Error:**

***

*  Promises chaining 

In de router heb ik een functie gemaakt met een routie erin. De routie controleert de URL wanneer er op een link op de pagina wordt geklikt en roept vervolgens de juiste functie op. Als de URL iets heeft na het hekje (#), dan controleert het welke functie aan dat deel is gekoppeld en activeert het.

Hier heb ik de data van 1 kunstwerk gehaald volgens de objectNumber die in de href van de target <a> staat.

            export async function onRouteChanged(data) {
                routie({

                    'object/:objectNumber': async function (objectNumber) {
                        var item_details = get_details(objectNumber);
                    }
                })
            }


. 

---
  
# Week 3: Design & refactor

## 1. Handle routes to manage state

*  Window: hashchange event

Dit event moet in de main js file staan en roept de router functie aan. De router functie controleert vervolgens de verandering in de URL en haalt de juiste data op wanneer de gebruiker op een link op de pagina klikt.

*  Routie - hash router

Ik was bezig om mijn code in modules te verdelen en te begrijpen hoe ik hash events kan toevoegen aan mijn code. Ik had de routie file gemist om aan mijn code toe te voegen. Daarna heb ik geleerd dat ik moet begrijpen in welke volgorde mijn functies werken, welke functie eerst wordt uitgevoerd, welke data hij wacht en waar deze data vandaan komt.


## 2. Refactor code into modules

*  Mijn basis modules files tot nu toe: [modules](https://github.com/SundousKanaan/web-app-from-scratch-2223/tree/main/userstory/script/modules)

Het is handig om de JavaScript-code naar modules te verdelen, waarbij elke module een specifieke rol heeft. Ik heb geleerd dat wanneer ik modules wil koppelen, ik mijn variabele- en functienamen moet exporteren en importeren. Anders zal de code niet begrijpen waar hij zijn data moet halen en naar waar hij de data moet sturen.


## 3. Design code logics

*  Activity diagram

![ Activity diagram](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/activity-diagram.png?raw=true)

---
  
# Week 4: Wrapping up

## 1.Manipulate, filter and sort data

Mijn zoekbalk moet een substring zoeken, maar de API van het Rijksmuseum biedt geen optie om dit te doen. De gebruiker moet de juiste naam invoeren met de juiste vorm (hoofdletters en kleine letters), bijvoorbeeld als de gebruiker "Rembrandt" invoert in de zoekbalk, zal hij een lege/foutieve staat zien, omdat de naam in de API-array staat als "Rembrandt van Rijn".

Ik wilde dit probleem oplossen door mijn eigen JSON-bestand te maken en ermee te werken, maar het aanpassen van de substring die overeenkomt met mijn array kost veel tijd en ik heb daar de afgelopen dag geen tijd voor gehad.

Ik heb ook gedacht aan de autofill-functionaliteit, maar helaas werkt het niet. Ik heb Robert gevraagd om mij te helpen, maar hij had ook geen idee waarom mijn code niet werkt.

Helaas kost dit op het einde ook tijd die ik niet heb, dus dacht ik eraan om het in de toekomst nog eens te proberen.


Stuk van mijn versie 2 "data.js" module:
    export async function getZoekenData(searchQuery){
        const Alldata = await fetchData(API_URL, API_KEY);
        const AllMakersArray = Alldata.artObjects.map(artObject => artObject.principalOrFirstMaker)
        const AllTitlesArray = Alldata.artObjects.map(artObject => artObject.title)

        // Define an array of autocomplete suggestions
        const suggestions = [...new Set([...AllMakersArray, ...AllTitlesArray])];
        // Filter suggestions based on user input
        // const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(searchQuery.toLowerCase()));

        let zoeken = '';

        if(suggestions.includes(searchQuery)){
            searchLoading();
            zoeken = 'involvedMaker=' + searchQuery;
            const data = await fetchZoekURL(API_URL,zoeken);
            searchResultaten(data);
        }

        else if(suggestions.includes(searchQuery)){
            searchLoading();
            zoeken = 'title=' + searchQuery;
            var data = await fetchZoekURL(API_URL,zoeken);
            searchResultaten(data);
        }

        else {
            searchLoading();
            let ul = document.querySelector('main>ul');

            ul.innerHTML = '';

            ul.innerHTML = `
              <li class="geenResulteten">
                <img src="./images/error.svg" alt="geenResulteten image">
                <p> Sorry! </p>
                <p> Er is geen resultaten.
                probeer andere zoekwoorden </p>
              </li>
            `;
        }
    }

    const searchInput = document.getElementById('main form label input');
    const suggestionsContainer = document.getElementById('main form div');

    searchInput.addEventListener('input', async function() {
      const searchQuery = this.value;
      const suggestions = await getZoekenData(searchQuery);

      // Clear existing suggestions
      suggestionsContainer.innerHTML = '';

      // Add new suggestions to suggestionsContainer
      suggestions.forEach(suggestion => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.textContent = suggestion;
        suggestionsContainer.appendChild(suggestionDiv);
      });
    });

__________________________________________

## 2.Improve UI

Ik heb willekeurige UI-statistieken aangepast waar nodig:
* Loeding statevoor de applicatie.
* Loeding statetijdens het zoeken.
* Empty/Error state als er geen resultaten zijn gevonden voor de invoerwaarde.
* Loeding statetijdens het ophalen van details van een object.

Ik weet dat er nog meer staten in mijn app moeten komen, zoals:
* error voor eerste app-gegevens ophalen.
* error voor de detailpagina van een object.
* Zero state voor de app.
* ...
Helaas had ik geen tijd om alle staten aan te passen.

__________________________________________


## 3. Code review

Mijn app was niet af om te kunnen testen en te reviewen, maar tijdens mijn werk door het hele proces heb ik mijn code wel uitgelegd aan verschillende mensen en feedback gekregen.

Zo kreeg ik bijvoorbeeld het advies om Engelse termen te gebruiken in mijn code, zoals in functienamen, variabelen en commentaren

__________________________________________

## 4. Een router issue

Ik heb mijn objectgegevens in een 'article'-element gezet, maar toen ik probeerde om de 'terug'-knop te activeren, werkte mijn router niet om mijn hash-event uit te voeren.

Object data invullen:

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
                    <a href="#object/">
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

Mijn roiuter:

            'object/#object ': function (){
            console.log('kaas')
            let article = document.querySelector('body>article');
            article.innerHTML='';
            article.style.display = "none";
        }

Ik heb het nog een keer geprobeerd en het is gelukt om het te fixen!

Stuk van mijn object data invullen:

        article.innerHTML =
        `
           <a href="#object/zoeken_page"></a>
            <a href="#object/open_image"></a>
            <a href="#object/details_page"></a>
            ...
        `

Mijn gefixt roiuter:

        'object/open_image': function (){
            article.classList.add('openimg');
        }
        ,
        'object/details_page': function (){
            article.classList.remove('openimg');
        }
        ,
        'object/zoekbalk': function (){
            header.style.display='none';
        }
        ,
        'object/zoeken_page': function (){
            article.innerHTML='';
            article.style.display = "none";
            main.style.padding='2em 1em 0 1em';

            mainElementen.forEach(mainElement =>{
                mainElement.style.display ='';
            })
        }

__________________________________________

## 5. Reflectie

Ik was echt slecht met API en hoe ik met hun moet werken. Ik weet zeker dat ik ben nu beter, niet alles prima gegaan, maar toen ik mijn "getZoekenData(searchQuery)" gemaakt, was ik echt blij me, want ik moest in 1 function verschilende functions roepen en met hun verwerken.

De eerste function was fetchData om de orginele ling te fetchen en mijn objects data te halen, maar van dit link kan ik niet volgens de "object type" zoeken, want de type van de objecten staat in de link met de object nummber in. Dus moet ik objects nummber halen en dan in de "fetchObjectDetails(objectNumber)" verwerken en de data halen en dan meer zoek opties kan maken zoals de type en de material.

Ik ben echt trost op dit function waar heb ik het gevol van "Ja, ik kan nu iets zelf doen met de API!"

In het eind heb ik het idee van, als ik ga dit nog een keer doen, kan ik wel iets beter doen als vormgeving en coderen.
