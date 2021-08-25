// objet windows (represente toute la fenetre du navigateur)
//objet document (represente la page internet)

//selectionner un objet par son ID
let title = document.getElementById('title');

//recupere uniquement le text
console.log(title.innerText);

//recupere uniquement le HTML & le text
console.log(title.innerHTML);

//modifier le contenu text
title.innerText = "Nouveau Titre"

//modifier le contenu html
title.innerHTML = '<strong>Nouveau</strong> titre';

//selectionner par les class (renvoi un tableau)
let citation = document.getElementsByClassName('citation');
console.log(citation);
console.log(citation[1]);

