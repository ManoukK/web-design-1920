# Een website exclusief voor Larissa

## Opdracht
Het is de bedoeling dat we een website gaan maken speciaal voor iemand. Ik kreeg Larissa toegewezen. Zij is een student aan het HvA en een topsporter in fietsen. Zij is ook blind en voor haar kan het web best vervelend zijn. 

De opdracht is om voor haar een fijne website te maken waarbij zij makkelijk en op haar manier haar sport rooster kan checken. Haar roosters zijn nu excel en docs bestanden en met de screen reader zijn de documenten ontzettend lastig te lezen. Daarom moet zij dat vaak met iemand anders doen. Het is dus de bedoeling om deze informatie omzetten naar iets waarbij zij wel zelfstandig bij haar rooster kan. 

## Concept
Mijn concept is het rooster verwerkt op een website. Op de hoofdpagina vind je alleen wat zij die dag moet gaan doen en kan ze navigeren naar haar week of jaar schema. Haar dag schema staat gelijk op de hoofdpagina omdat ze dat het vaakst en het snelst wilt weten. Dankzij de kopjes kan zij makkelijk en snel informatie vinden die zij nodig heeft. De pagina is vooral donker omdat zij overgevoelig is voor licht maar omdat zij wel een ontzettend vrolijk persoon is heb ik toch kleuren toegevoegd en hiervan de wat donkere tinten gepakt. 

Ik heb tijdens de testsessies veel geluisterd naar haar feedback, ook als ze die gaf aan andere. Op deze manier heb ik door al die kleine dingetjes iets gemaakt wat zij heel fijn vind werken. 

## Testen en iteraties
Wij hadden met Larissa 3 test sessies. Elke test sessie heb ik uitgetypt in mijn wiki en op de feedback die ik kreeg ben ik weer door gaan itereren. 

De eerste testsessie was vooral een kennismaking. Ik had nog niet veel om te laten zien en wilde dan ook vooral weten wie Larissa is, wat ze doet en wat ze leuk vind. Aan de hand van die informatie heb ik een scenario gemaakt over larissa en haar situatie wat betreft haar week en jaar schema. Daarnaast heb ik ook de belangrijkste bevindingen opgeschreven in mijn wiki.  
- [User scenario](https://github.com/ManoukK/web-design-1920/wiki/User-Scenario-van-Larissa)
- [Bevindingen test 1](https://github.com/ManoukK/web-design-1920/wiki/User-test-week-1)

Vervolgens ben ik gaan itereren. Omdat ik eigenlijk nog bijna niks had heb ik dit niet gedocumenteerd. Ik heb vooral veel dingen toegevoegd die naar voren kwamen bij de test. Tijdens de tweede test had ik nu wel mijn website laten zien. Ik had een opdracht voor haar en wilde vooral weten wat ze ervan vond en wat er beter kon. Anderen hadden hetzelfde idee waardoor we met z’n alle ontzettend veel informatie verzamelde waar we weer met z’n alle op door konden borduren. 
- [Bevindingen test 2](https://github.com/ManoukK/web-design-1920/wiki/User-test-week-2)

Vervolgens ben ik weer gaan itereren. Het leek mij ook handig om dit te documenteren. Hierin vertel ik ook waarom ik bepaalde keuzes heb gemaakt en hoe ik daarbij ben gekomen. Dit was een best grote iteretie omdat we in de tweede test veel informatie kregen dus ik wilde graag laten zien wat ik allemaal had toegepast. 
- [Iteraties](https://github.com/ManoukK/web-design-1920/wiki/Iteratie-van-test-2-naar-test-3)

Tijdens de derde en laatste test kreeg ik weer veel feedback maar het was vooral positief. Er waren nog een aantal kleine dingetjes die ik kon aanpassen. De feedback van anderen waren nu allemaal heel gericht. Hierdoor had ik er zelf niet veel meer aan en zoals dat anderen niet veel meer hadden aan de feedback die ik kreeg. 
- [Bevindingen test 3](https://github.com/ManoukK/web-design-1920/wiki/User-test-week-3)
- [Iteraties](https://github.com/ManoukK/web-design-1920/wiki/Iteratie-van-test-3,-laatste-iteratie)

## Eind product
#### Hoofdpagina met dagplanning
![Schermafbeelding 2020-05-01 om 15 40 58](https://user-images.githubusercontent.com/45541885/80809616-55587c00-8bc2-11ea-853e-7a2117d15bae.png)

#### Weekplanning
![Schermafbeelding 2020-05-01 om 15 41 09](https://user-images.githubusercontent.com/45541885/80809702-8042d000-8bc2-11ea-8ef0-191f43500dae.png)

#### Jaarplanning 
![Schermafbeelding 2020-05-01 om 15 41 32](https://user-images.githubusercontent.com/45541885/80809713-86d14780-8bc2-11ea-8c3b-517a3e2450e5.png)

#### Jaarplanning ingezoomed op 1 maand
![Schermafbeelding 2020-05-01 om 15 41 51](https://user-images.githubusercontent.com/45541885/80809732-905aaf80-8bc2-11ea-8334-eb0e401b40fb.png)

## exclusive design principles en hoe heb ik deze toegepast
### Study situation
Het onderzoeken van de situatie heb ik gedaan door onder andere met Larissa te testen maar ook door haar persoonlijk te leren kennen. Op deze manier kon ik veel beter een website maken echt voor haar. Tijdens het itereren kon ik dingen toepassen die mij logisch leken voor haar door haar gedrag op de website van de vorige keer te observeren en hier notities van te maken. Bij de volgende test was ik dan ook erg nieuwsgierig wat zij van de aanpassingen vond. Op deze manier heb ik het hele vak zo gewerkt. Elke keer weer de situatie bestuderen. Dit deed ik ook als zij bij anderen ging testen en soms kwamen daar hele interessante dingen uit die ik ook weer mee nam zodat het alleen nog maar persoonlijker werd voor haar. 

### Ignore conventions
Bepaalde standaarden heb ik wel meegenomen. Zoals het gebruik van semantisch correcte titels en kopjes. Andere dingen zoals teksten in p elementen zetten bleek niet altijd fijn te werken voor Larissa. Zo had ik in het jaar schema elke dag in een p element gezet. (Semantisch gezien is dit veel netter in een tabel in html maar omdat dit al helemaal niet werkt met een screen reader koos ik eerst voor p elementen.) Tussen elk stukje leest haar screen reader “leeg” voor wat ontzettend irritant was dus heb ik besloten om per week lijstje te maken met daarin de dagen als list items. Zo zag het er dan uit in html 
```
 
           <h3>14 tot en met 20 oktober week 42</h3>
           <ul>
               <li>14 oktober leeg, maandag</li>
               <li>15 oktober leeg, dinsdag</li>
               <li>16 oktober leeg, woensdag</li>
               <li>17 oktober Tandem test wedstrijd, donderdag</li>
               <li>18 oktober Tandem test wedstrijd, vrijdag</li>
               <li>19 oktober leeg, zaterdag</li>
               <li>20 oktober leeg, zondag</li>
           </ul>
```

Op deze manier had Larissa geen last meer van haar screen reader die steeds “leeg” zei. 

Daarnaast is de zinsopbouw soms ook wat anders dan wat je normaal gesproken zou doen op een website. Zoals je hierboven in de tekst al kon lezen staat de dag helemaal op het laatst in plaats van vooraan. Dit komt omdat LArissa ontzettend snel nog alle teksten heen gaat en zij vind het belangrijker om datum en inhoud van de dag te weten dan de dag zelf maar als ze dat eens zou willen weten kan ze gewoon de zin af luisteren. Het is dus meer op volgorde gezet van belangrijkheid in plaats van logischheid.  

Dit soort teksten: 16 oktober leeg, woensdag, zou je ook niet snel op een website zien. Dit is heel kort en duidelijk. Dat heb ik gedaan om er voor te zorgen dat Larissa super snel kan weten of die dag belangrijk is of leeg. Daarom heb ik daar ook 1 woord voor gekozen.

### Prioritise identity 
Tijdens het testen probeerde ik Larissa er heel erg bij te betrekken. Ik vroeg vaak wat haar opviel, wat ze miste of wat ze juist fijn vond. Als ze feedback gaf op bepaalde dingen, probeerde ik vaak terug te vragen hoe zij het liever wilde hebben zodat ik het de volgende keer gelijk goed kon doen. Vaak had ze daar ook wel een goed idee van. 

Door Larissa echt bij het proces te betrekken, elke week te testen en veel vragen te stellen heb ik echt het gevoel dat ik nu veel verder ben gekomen dan wanneer ik een project had waarbij zij niet zo betrokken is. 

### Add nonsense 
Eerst had ik nonsense toegepast door gebruik te maken van de emojis. Deze werden door de screenreader heel grappig voorgelezen en Larissa moest tijdens het testen er ook erg om lachen. Ik vond de emojis toch wat te weinig en naar aanleiding van Vasilis heb ik toch wat meer gespeeld met de screenreader. Ik probeerde de emojis wat meer te laten leven. Zo had ik een lachende emoji in de titel en probeerde dus ook de screenreader aan het lachen te maken. Zo spelen met de screenreader was super leuk en ik merkte dingen die ik anders nooit door zou hebben. Dat merkte ik vooral toen ik probeerde te beatboxen met de screenreader want dan luister je veel meer en beter naar hoe de screenreader het uitspreekt. Dit hele experiment is voor mijn gevoel wel een beetje mislukt. Maar aan de andere kant heb ik wel lol gehad en geleerd over de screenreader wat ik wel weer heel leuk vind. De emojis heb ik niet helemaal weggelaten omdat Larissa dat wel heel leuk vond. Ik heb ze nu op de weekplanning pagina gezet. Ik vond ze daar wel goed bijpassen. Als je mijn hele documentatie wilt lezen over deze test kan dat hier: https://github.com/ManoukK/web-design-1920/wiki/Iteratie-van-test-3,-laatste-iteratie

## Features
- [ ] Een pagina met alle events van het jaar en daarin de planning die erbij hoort
- [x] Positieve berichten met javascript dynamisch maken zodat ze elke dag iets anders krijgt te horen

## Bronnen
- De design principes voor exclusive design: https://exclusive-design.vasilis.nl/
- Emoji's in in html door een code: https://www.w3schools.com/charsets/ref_emoji.asp
- Kleuren pallete (kleuren zelf donkerder gemaakt):
- Emoji afbeeldingen: https://emojipedia.org/emojidex/
- Het schema van Larissa gekregen van haarzelf. 

## Credits
- Larissa voor al haar feedback en het testen.
- Alle andere die in team Larissa zaten want dankzij hun concepten kwam ik ook veel verder omdat Larissa daar ook weer feedback op gaf. 
- Vasilis die mij inspiratie gaf om nog wat meer te itereren op de emoji's op mijn website. 
