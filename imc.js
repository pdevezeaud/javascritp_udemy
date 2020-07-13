let poids = prompt('Votre poids en Kg ? : ');
let taille = prompt('Votre taille en Cm ? : ');

function calculerImc(poids, taille) {


    // parsing de string en number
    let numpoids = Number(poids);

    // parsing de string en number
    let numtaille = Number(taille);

    //Conversion metre ne centimetre
    let convMetreEnCentimetre = numtaille / 100;

    //carre de la taille
    let finalTaille = Math.pow(convMetreEnCentimetre, 2);

    //Calcul Final
    return calculImc = numpoids / finalTaille;


}

calculerImc(70, 169);