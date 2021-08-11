/** Time stamp 1er Janvier 1970 à Minuit UTC (Londre) */

let dateActuelle = Date();
console.log(dateActuelle);

/**il vaut mieux utiliser la date en seconde */
let dateEnSeconde = Date.now();
console.log(dateEnSeconde)

/** Utilisation du constructeur Date */

//au-dessous
// - année (obligatoire)
// - mois (obligatoire) commence par 0

// - jour (facultatif) qui commence par 1
// - heure (facultatif) qui commence par 0
// - minute (facultatif) qui commence par 0
// - seconde (facultatif) qui commence par 0
// - milliseconde (facultatif) qui commence par 0

let datePrecise = new Date(2021,07,11);
console.log(datePrecise);

// Utilisation de Getter et de Setter pour les dates

let recupererAnnee = new Date();
console.log(recupererAnnee.getFullYear());
// Jour de la semaine commence à partir de dimanche à l'index 0
let dateActuelle2 = new Date();
console.log(dateActuelle2.getDay());
console.log(dateActuelle2.getDate()); // jour d'aujourd'hui !!

console.log(dateActuelle2.getUTCDay());

dateActuelle2.setFullYear(2050);
console.log(dateActuelle2.getUTCFullYear());

// Transformer une date au format local
let dateActuelleFrance = new Date();

//trois fonctions qui permette de mettre en date locale
/**
 * tolocalDateString = jour, mois, année
 * tolocaltimeString = heure
 * tolocalString = jour, moi, année, heure
 * 
 * on peut remplacer 'fr-FR' par navigator.language qui recupere
 * la langue du navigateur
 */
let dateLocale = dateActuelleFrance.toLocaleString(navigator.language, {
    weekday: 'long',
    year: 'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    second: 'numeric'
});

console.log(dateLocale);