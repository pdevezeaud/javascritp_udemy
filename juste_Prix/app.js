// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);

//initialisation d'un compteur
let coups = 0;
let nombreChoisi;



// Etape 6 - Créer la fonction vérifier

function verifier(nombre) {

    let instruction = document.createElement('div');
    
    if(nombre < nombreAleatoire) {
        // c'est plus
        instruction.textContent = "#" + coups + "(" + nombre + ") C'est plus !";

        //ajouter les classes instructions et plus
        instruction.className = "instruction plus";
    
    }else if(nombre > nombreAleatoire) {
    // c'est moins
    instruction.textContent = "#" + coups + "(" + nombre + ") C'est moins !";

    //ajouter les classes instructions et plus
    instruction.className = "instruction moins";


    }else {

        // c'est plus
        instruction.textContent = "#" + coups + "(" + nombre + ") Felicitation vous avez trouvé !!";

        //ajouter les classes instructions et plus
        instruction.className = "instruction fini";



    }

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// ecoute la frappe dans le input
input.addEventListener('keyup',() =>{
    if(isNaN(input.value)){
        error.style.display = "inline"; //block fonctionne aussi

    } else {
        error.style.display = "none";

    }
})

// Etape 5 - Agir à l'envoi du formulaire

// par défaut les submit on un evenement qui envoi vers une aute page
// ici nous recuperons cette evenement en rajoutant 
// le parametre e.preventDefault() qui annule cet evenement (evite d'envoyer le formulaire)
formulaire.addEventListener('submit', (e)=> {
    e.preventDefault();
    //if(verifier que input.value n'est pas un nombre et qu'il ne soit pas vide)
    //mettre la bordure de formulaire en rouge

    if(isNaN(input.value) || input.value == '') {
        input.style.borderColor = "red";
    }
    else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        //une fois le chiffre choisi et validé on remet à vide le formulaire
        input.value = '';
        verifier(nombreChoisi);
    }
});

}