// call et apply permet d'invoquer immédiatement une fonction

// la differencce entre apply et call et que apply doit passer ses arguments
// dans un tableau

// call peut donner les arguments un par un


//call
// Animal.call(this,nombreDePattes,poids)

// objet litteral
let grandalf = { titre: "Magicien"}

function direBonjour(arme,degats){
    console.log("Bonjour " + this.titre + ", vous possédez " + arme + " qui donne " + degats + " points de degats");
}

direBonjour.apply(grandalf, ["un Baton", 75]);
direBonjour.call(grandalf, "un baton ", 75 );

//Bin permet de changer le contexte de this

this.valeur = "windows";   //ici this a pour valeur windows

let monObjet = {
    valeur: "Objet",
    getValeur: function(){
        console.log(this.valeur);
    }
}

monObjet.getValeur();
// Je recupere dans une varialbe la valeur de monObject.getValeur()
let maValeur = monObjet.getValeur;
maValeur();


// on recupere le contexte de mon objet
let maValeurAvecBind = monObjet.getValeur.bind(monObjet);
maValeurAvecBind();





