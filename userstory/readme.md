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


*  hi-fi versie

  Dark mode

![ prototype-darkmode](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/prototype-darkmode.png?raw=true)


  Light mode

![ prototype-lightmode](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/prototype-lightmode.png?raw=true)


*  Sketch User Flow in a Wireflow

![ flow](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/flow.png?raw=true)

## 2. Loading data from the API and build the User Interface

Ik kon de algemene API-link ophalen en de directe data verkrijgen, maar ik was nog niet in staat om de link met variabelen correct op te halen.
 
<br>Ik heb de data van de eerste 5 schilderijen opgehaald voor mijn header en de top 10 objecten opgehaald voor mijn top 10 carrousel. Vervolgens heb ik met behulp van JavaScript alle nodige HTML-elementen gemaakt.

## 3. Add feedback to the User Interface and test

*  UI states

Ik heb alleen een error state en een loading state als UI-states. Aangezien er geen favorietenpagina is in mijn app, kan ik de lege status niet gebruiken.

**Loading state:** 

Schets 1: Een afbeelding van een object verschijnt blok voor blok, of er verschijnen meerdere afzonderlijke objectafbeeldingen na elkaar.

![ loading-state-schets1](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/loading-state-schets1.png?raw=true)

Schets 2: De naam van het museum verschijnt met daaronder een laadlijn.

![ loading-state-schets2](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/loading-state-schets2.png?raw=true)


**error state:** 

Gewoon een symbole van een schilderij met de type error 

![ error-state-schets](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/error-state-schets.png?raw=true)

**hi-fi versie**

![ ui-states](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/ui-states.png?raw=true)


*  Promises chaining ?!







__________________________________________


# Week 3: Design & refactor

## 1. Handle routes to manage state

*  Window: hashchange event

*  Routie - hash router

Ik ben nog bezig om mijn code in modules te verdelen en te begrijpen hoe ik hash events kan toevoegen aan mijn code.


## 2. Refactor code into modules

*  Mijn basis modules files tot nu toe: [modules](https://github.com/SundousKanaan/web-app-from-scratch-2223/tree/main/userstory/script/modules)




## 3. Design code logics

*  Activity diagram

![ Activity diagram](https://github.com/SundousKanaan/web-app-from-scratch-2223/blob/main/userstory/images/activity-diagram.png?raw=true)




______________________________________

