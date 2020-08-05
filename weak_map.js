//collection d'objet --> cle valeur
let voitureA = {
    constructeur : 'Tesla',
    modele : 'Cybertruck'
}

let voitureB = {
    constructeur : 'Renault',
    modele : 'Espace'
}

let voitureC = {
    constructeur : 'BMW',
    modele : 'Z3'
}

let index = {
    id : 1
};

let voitures = new WeakMap();
voitures.set(index,'5');
voitures.set(index,voitureA);

//voitures.delete(index);
console.log(voitures);



