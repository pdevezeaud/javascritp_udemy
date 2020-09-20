
//mark est une variable qui contient un objet entre les {}

// let mark = {
//     prenom: 'mark',  //proprieté
//     nom: 'Zuckerberg',
//     email: 'mark@facebook.com',


// // A l'ancienne
// sePresenter: function(){
//     console.log("Bonjour, je m'appelle " + this.prenom);
// }

// }

//on crée une fonction constructeur pour nos utilisateurs
function Utilisateur(prenom,nom,email){
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;    
}

//Attention pas de fonction anonyme pour les proto
//partage de la fonction entre tous les objet
Utilisateur.prototype.sePresenter = function(){

        console.log("Bonjour, je m'appelle "+ this.prenom + " et mon nom et " + this.nom);
}




// On crée un objet
var mark = new Utilisateur("Mark","Zuckenberg","mark@facebook.com");
var bill = new Utilisateur("Bill","Gates","bill@microsoft.com");




// mark.poste = "PDG";
// console.log(mark);

function Logement(type, annee,placeDeParking,proprietaire) {
    this.type = type;
    this.année = annee;
    this.placeDeParking = placeDeParking;
    this.proprietaire = proprietaire;

}

var appartementA = new Logement("Appartement",2020,true,mark); //ici mark est un objet
// console.log(appartementA.proprietaire.prenom);
// console.log(appartementA);

// creer un objet avec Object() (generique)
// genre de constructeur vide !!
var monObjet = new Object();
monObjet.titre = "Le titre de l'objet";

mark.sePresenter();
