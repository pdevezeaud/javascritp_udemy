
//etant les possibilité de l'objet set. On ne peut stocker que des objets. weakset stock une collection d'objet.



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

let voitures = new WeakSet([voitureA,voitureB,voitureC]);

voitures.add(voitureA);
voitures.add(voitureB);
voitures.add(voitureC);

voitures.delete(voitureC)

console.log(voitures);