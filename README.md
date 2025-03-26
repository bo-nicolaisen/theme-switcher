#Stylesheet switcher

Dette projekt demonstrerer en simpel funktionalitet til at skifte tema ved hjælp af en dropdown-menu. Brugere kan vælge forskellige stylesheets for dynamisk at ændre udseendet af websiden.

## Funktioner
- Dropdown-menu til at skifte mellem flere temaer.
- Foruddefinerede temaer inkluderer:
  - Light (`light.css`)
  - Dark (`dark.css`)
  - Red (`red.css`)

## Sådan virker det
1. Dropdown-menuen aktiverer funktionen `toggleTheme`, når et valg foretages.
2. Funktionen `toggleTheme` indlæser dynamisk det valgte stylesheet.

## Filstruktur
- `index.html`: Indeholder HTML-strukturen og dropdown-menuen til valg af tema.
- `assets/css/`: Mappe til opbevaring af tema-stylesheets (`light.css`, `dark.css`, `red.css` osv.).
- `assets/js/site.js`: Indeholder JavaScript-logikken til at skifte temaer.

## Brug
1. Tilføj dine egne stylesheets til mappen `assets/css/`.
2. Opdater `<select>`-elementet i `index.html` for at inkludere dine nye stylesheets som muligheder.
3. Åbn filen `index.html` i en browser for at teste tema-skifte-funktionaliteten.