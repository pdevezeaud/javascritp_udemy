// stocke l'url dans un variable
let url = "https://blockchain.info/ticker";

// setinterval pour rafraichir la page
function recupererPrix() {

    // Créer requête
    // on stocke l'url dans une variable pour créer un objet
    let requete = new XMLHttpRequest();

    // on ouvre
    requete.open('GET', url);

    // le type de retour qu'on attend
    // ici du json en retour

    requete.responseType = 'json';

    //enfin nous envoyons notre requete
    requete.send();

    //des qu'on reçoit une reponse, cette fonction est excecutée
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            //on verifie le status
            if (requete.status === 200) {
                //si tout est ok dans les deux conditions on peut stocke la reponse
                let reponse = requete.response; //on stock la reponse
                // si on veu recuperer le prix du bitcoin en euro (chemin json)
                let prixEnEuros = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEnEuros;
            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}
//setInterval(recupererPrix, 5000);


