try {

    let recompense = prompt("Choisizzer une récompense: epee, arc, Hache");
    let degats;

    switch (recompense){
        case "epee":
            degats = 40
            break;

        case "arc":
            degats = 50
            break;

        case "Hache":
            degats = 40
            break;

        default:
            throw new Error('Vous ne pouvez pas tricher.');

    }

    alert("Vous avez choisi de prendre " + recompense +' avec ' + degats + ' de dégats');

} catch(error) {
    alert(error);
}

finally{

    alert('Fin de programme');
}