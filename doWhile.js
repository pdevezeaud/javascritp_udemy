
//declare variable prenom car dans la boucle prenom est une variable local
// ou dans ce cas faire une variable globale
let prenom;
do {
    prenom = prompt('quel est votre prénom ?');
   // var prenom = prompt('quel est votre prénom ?');

} while (prenom == "" || prenom == null);

alert("Bonjour " + prenom);