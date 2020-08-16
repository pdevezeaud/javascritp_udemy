document.querySelector('#a-supprimer').remove();

//****** creation des elements *******

//1er etape HEADER
let header = document.createElement('header');

//2eme etape Menu
let menu = document.createElement('div');

//3eme etape Paragraphe
let paragraphe = document.createElement('p');




//Personnalisation du header
header.textContent= "Bienvenue";
header.style.backgroundColor = "#e3b04b";
header.style.color = "white";
header.style.padding = "60px";
header.style.textAlign = "center";
header.style.fontSize = "3em";

//Personnalisation du Menu
menu.innerHTML = "<a href='#'>Acceuil</a> / <a href='#'>Une autre page</a>";
menu.style.backgroundColor = "#f1d6ab";
menu.style.padding = "30px";

//Personnalistion du paragraphe
paragraphe.textContent = "Ceci est un paragraphe"
paragraphe.style.margin = "15px";






//Ajout au Body
document.body.append(header);
document.body.append(menu);  //ou document.body.append(header,menu,p);
document.body.append(paragraphe);

