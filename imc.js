function calculerImc(poids, taille) {

    //calculer la taille en metres
    let tailleEnMetre = taille / 100
    let tailleCalculee = Math.pow(tailleEnMetre, 2);

    let resultat = poids / tailleCalculee

    return resultat;
}

let poids = prompt("Votre poids en Kg:");
//poids = parseInt(poids);
let taille = prompt("Votre taille en cm:");
//taille = Number(taille);

alert(calculerImc(poids, taille));