

let premierNombre;
let secondNombre;

do {

    choix = prompt("Que souhaitez vous faire\n\n 1 - Addition\n  2 - Multiplication\n  3 - Soustraction\n  4 - Division\n");

} while (choix == "" || choix == null)

switch (choix) {
    case "1":
        do {
    
            premierNombre = prompt("Entrer le premier nombre : ");
            premierNombre = Number(premierNombre);
            deuxiemeNombre = prompt("Entrez le second nombre : ");
            deuxiemeNombre = Number(deuxiemeNombre);
            
        } while ( isNaN(premierNombre,deuxiemeNombre));
        break;

    case "2":
        console.log("Je fais une Multiplication");
        break;

    case "3":
        console.log("Soustraction");
        break;

    case "4":
        console.log("Je fais une Division");
        break;



    default:
        console.log("les choix autorisée : 1 à 4 !!!")
        break;
}