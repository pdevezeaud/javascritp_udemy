<<<<<<< HEAD
//const url = 'https://lesoublisdelinfo.com/api.php';  //pour get
const url = 'https://lesoublisdelinfo.com/api.php?prenom=John';  //pour POST
=======
//const url = 'https://api.openweathermap.org/data/2.5/weather?q=saint-saulve&appid=?a7da75044719ccd7ca2ee4780cb08ab0&units=metric';  //pour get
const url = 'https://lesoublisdelinfo.com/api.php?a7da75044719ccd7ca2ee4780cb08ab0';  //pour POST
>>>>>>> 00c15a9833272e03b4fd34697bac9db7395e8437

let requete = new XMLHttpRequest();

//GET
requete.open("GET", url);
requete.responseType = 'json';
requete.send();

//POST
requete.open('POST', url);
// on envoi à l'api
requete.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
requete.responseType = 'json';
<<<<<<< HEAD
requete.send('prenom=John&nom=Doe');
=======
requete.send('prenom=John');
>>>>>>> 00c15a9833272e03b4fd34697bac9db7395e8437


requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200) {
            let reponse = requete.response;
            console.log(reponse);

        } else {
            alert('Un problème est intervenu, merci de revenir plus tard');
        }
    }
}