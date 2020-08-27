
let logo = document.querySelector('img');


function conversion() {
    let somme = prompt("Entrez la valeur à convertir en €uros :");
    somme = Number(somme);
    let resultat = somme * 6.55957;
    alert(somme + " €\n" + resultat + " FR");
}
conversion();