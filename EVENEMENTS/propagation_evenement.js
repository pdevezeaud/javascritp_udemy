let article = document.querySelector('article');
let h1 = document.querySelector('h1');



//ici nous avons le problème de propagation des evenement
//si on clique sur le gris (article) on a aussi le popu du titre
// qui remonte dans la foulée
article.addEventListener('click', () => {
    alert('article cliqué !');
});

// si on ajoute stopropagation() à l'evenement (en rajoutant l'argument e)
// on pourra cliquer sur un sans déclancher l'autre.

h1.addEventListener('click', (e) => {
    alert('titre cliqué !');
    e.stopPropagation();
});