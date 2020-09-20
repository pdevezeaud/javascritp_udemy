
//mark est une variable qui contient un objet entre les {}

let mark = {
    prenom: 'mark',  //proprieté
    nom: 'Zuckerberg',
    email: 'mark@facebook.com',


// A l'ancienne
sePresenter: function(){
    console.log("Bonjour, je m'appelle " + this.prenom);
}

}

mark.sePresenter();