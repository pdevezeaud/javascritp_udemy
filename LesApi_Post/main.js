//const url = 'https://lesoublisdelinfo.com/api.php';  //pour get
const url = 'https://lesoublisdelinfo.com/api.php?prenom=John';  //pour POST

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
requete.send('prenom=John&nom=Doe');


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