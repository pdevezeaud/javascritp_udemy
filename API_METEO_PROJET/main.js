let ville = "Paris";
recevoirTemperature(ville)

let changerVille = document.querySelector('#changer');

changerVille.addEventListener('click', () => {
     ville = prompt("Quelle ville souhaitez vous voir ?");
     recevoirTemperature(ville);
});


function recevoirTemperature(ville){
    
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=a7da75044719ccd7ca2ee4780cb08ab0&units=metric';


    let requete = new XMLHttpRequest();
    requete.open('GET', url);

    requete.responseType = 'json';

    requete.send();

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            //on verifie le status
            if (requete.status === 200) {
                //si tout est ok dans les deux conditions on peut stocke la reponse
                let reponse = requete.response; //on stock la reponse
                // si on veut recuperer la temperature de la ville (chemin json)
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector('#ville').textContent = ville;
                document.querySelector('#temperature_label').textContent = temperature;
            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}


