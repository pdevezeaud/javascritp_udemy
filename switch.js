let consommable = "chocolat";

switch (consommable){
    case "Carotte":
    case "Pomme de terre":
        console.log("Ceci est un légume");
        break;

    case "Bannane":
    case "Poire":
        console.log("Ceci est un fruit");
        break;
    
    default:
        console.log("Ceci n'est pas un fruit ni un legume");
}