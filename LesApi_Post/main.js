const url = 'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest();

//GET
requete.open("GET", url);

requete.responseType = 'json';

requete.send();

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