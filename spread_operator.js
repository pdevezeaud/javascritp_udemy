//Exemple 1 : fusionner plusieurs tableaux
let fruits = ['fraise', 'banane','poire'];
let aliments = ['chocolat','sucre','lait',...fruits];
//let total = aliments.concat(fruits);


//console.log(aliments);

//exemple 2 : decouper chaine de caractères en plusieurs elements
let phrase = "bonjour";
let phraseTableau = [...phrase];

//console.log(phraseTableau);

//exemple 3 : selectionner un element et stocker les autres dans une variable
let devises = ['dollars', 'euros', 'yen'];
let[premiereDevise,...autres] = devises;

console.log(premiereDevise);
console.log(autres);
