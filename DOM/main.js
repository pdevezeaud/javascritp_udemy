// objet windows (represente toute la fenetre du navigateur)
//objet document (represente la page internet)

//selectionner un objet par son ID
let title = document.getElementById('title');

//recupere uniquement le text
console.log(title.innerText);

//recupere uniquement le HTML & le text
console.log(title.innerHTML);