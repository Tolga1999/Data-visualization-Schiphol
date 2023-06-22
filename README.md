> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Vluchten visualiseren - Schiphol
Wij hebben de taak gekregen om een front-end applicatie te ontwikkelen waarbij de vertrekkende of aankomende vluchten van Schiphol op een kaart worden weergegeven.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
De schiphol dashboard laat simpel en vlug de laatste vluchten zien vanaf schiphol naar verschillende bestemmingen. De vluchten worden gevisualiseerd op een kaart, verder kan je makkelijk en snel de vluchten zien op een tabel waarin je kan zoeken en filteren.
<!-- Voeg een mooie poster visual toe 📸 -->
_Hieronder een foto van de zero state:_

![image](https://github.com/Tolga1999/proof-of-concept/assets/112855878/76f498a5-fff5-4233-ab31-96cb8a2fb2f0)

_Hieronder een foto van de resterende content op de pagina:_

![image](https://github.com/Tolga1999/proof-of-concept/assets/112855878/3bd76322-cd59-4a0b-ae00-ee03924e3fa9)

<!-- Voeg een link toe naar Github Pages 🌐-->
Link naar de website: https://schiphol-dashboard-sprint-12-leertaak.onrender.com

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
De volgende stappen kan je nemen om gebruik te maken van de dashboard:

1. Zoeken naar een vlucht.
2. Selecteren van een vlucht en op de kaart visueel zien.
3. Selecteren van alle vluchten en zo alle vluchten op de kaart zien.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
In dit project zijn de volgende technieken gebruikt:
- HTML
- CSS
- JS
- Node
- Express
- EJS
- Datamaps library
- Greensock animation library

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Voordat je de applicatie kan runnen moet je node runnen op je lokale computer, Node kan je downloaden op de volgende website: https://nodejs.org/en/.
Download de stabiele versie 18.14.0 LTS, open je terminal binnen de code editior (zoals VS code) en run de volgende command lines:

- NPM install, dit om express, ejs en alle andere afhankelijkheden te downloaden.
- NPM start om je applicatie te runnen, je lokale server wordt meestal gerunned op port 8000.
- Optioneel: je kan de applicatie ook runnen met een script, zo kan je npm run dev gebruiken ipv npm start (er wordt dan gebruik gemaakt van nodemon). Dit zorgt ervoor dat de applicatie automatisch aan en uit wordt gezet na een verandering binnen de server side (met deze optie is het handmatig aan en uitzetten van de applicatie niet meer nodig).

## Bronnen
- Node download: https://nodejs.org/en/
- Express/node introductie: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
- EJS: https://ejs.co/
- Schiphol API: https://developer.schiphol.nl/login
- Greensock documentatie: https://greensock.com/get-started/
- Datamaps documentatie: https://datamaps.github.io/


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
