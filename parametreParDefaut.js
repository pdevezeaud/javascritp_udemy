let nombreUn = 4, nombreDeux = 7;

function addition(nombreA,nombreB = 10){ //ici je spécifie un param par defaut nombreB aura tous le temps 10
    let result = nombreA + nombreB;
    return result;
}

console.log(addition(nombreUn));


let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDePreparation = 10,MinutesDeCuisson = 15){ //ici je spécifie un param par defaut nombreB aura tous le temps 10
    let result = nombreDeGateaux * (MinutesDeCuisson + minutesDePreparation);
    return result;
}

let tempsDePreparationChocolat = cuisiner(4);
// dans le cas ou j'ai un autre gateau ou le temps de prépa change
let tempsDePreparationFraisier = cuisiner(1,20);
console.log(tempsDePreparationFraisier);