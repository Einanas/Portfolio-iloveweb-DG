# Sprint 13  2425

## I Love Web

**[Mr. Vasili's website](https://vasilis.nl)**


Ontdek nieuwe dingen en ga experimenteren
Maak weird shit

Meneer van Gemert werkt voornamelijk alleen met html en css. Hij heeft kunst gestudeerd en heeft passie voor kunst maar het kost helaas veel geld. Dus is hij verder gegaan met webdesign. Hij is los gegaan, is gaan experimenteren en nieuwe dingen uitproberen en maken wat aansluit op zijn kennis van kunst. Zo heeft hij veel klokken gemaakt aan de hand van html en css.

#### Toegankelijkheid
Too much content can be frustrating for disable people. 

Geanimeerde illustratie voor blinden, inplaats van een illustratie laten zien en dan pas de alternatieve teksten: 
Eerst de tekst dat grappig is en dan pas een animatie laten zien.


# Sprint 13  2526
## Eigen Documentatie
(an attempt to get DATA)

Volgens mij doe ik dan alsnog iets verkeerd want ik krijg nog steeds geen resultaat 🥲.
Ik heb geprobeerd:

https://fdnd.directus.app/items/squads?cohort=2025&cohort=2026
https://fdnd.directus.app/items/squads?cohort=2526
https://fdnd.directus.app/items/squads?cohort=%20252620%
https://fdnd.directus.app/items/squads?cohort=2025&cohort=2026
Eventueel ging ik beter kijken totdat ik me echt stupid voelde. Als je dit https://fdnd.directus.app/items/squad in chrome zet, dan zie je een lijst met squads data die terug gaat naar 2021-2022. En wat zie ik daar in?

"cohort": "2122"

I felt ridiculously stupid. First of all, the API should have started with ___/items/squads and not ___/items/person if i wanted to get all the squads. and after that, the API End Point should've been with a parameter for the year of 2025 and 2026. so i did this:

https://fdnd.directus.app/items/squad?%20cohort%20=%202526%20

which actually translates to that i would get the squads of 2025 and 2026 (%20 stands for  space and %22 stands for "). Unfortunately i still got the squads of from the year 2021 till the present. which means, i maybe lack a filter if i only want the squads of the year 2025 and 2026. So what if i want to get that year:

https://fdnd.directus.app/items/squad?%22cohort%22=%222526%22&filter[cohort][_gte]=%222526%22

I tried it and i get zero data. So... Data :(

