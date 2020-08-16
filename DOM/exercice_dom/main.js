let div = document.querySelector('div').remove()


//on cree l element html vide de contenu
// en fait on cree le <header></header>
let newHeader = document.createElement('header');
newHeader.style.backgroundColor = '#e3b04b';
newHeader.style.textAlign = 'center';
newHeader.style.height = '300px';
newHeader.style.lineHeight = '310px'
newHeader.style.fontSize='28px';

let sousHeader = document.createElement('header');
sousHeader.style.backgroundColor =  '#f1d6ab';
sousHeader.style.height = '100px';

let listUl = document.createElement('ul');
let listLi = document.createElement('li');


let paragraphe = document.createElement('p');






//etape 2 : on creer le contenu
let contenuHeader = document.createTextNode('BIENVENUE')
let contenuParagraphe = document.createTextNode('Ceci est un paragraphe crée avec Javascript');
let contenuLi = document.createTextNode('Acceuil /Un autre page');


//etape 3, le contenu et l'element ne se connaissent pas
//il faut ajouter le contenu en tant qu'enfant de l'element
newHeader.appendChild(contenuHeader);
paragraphe.appendChild(contenuParagraphe);
listUl.appendChild(sousHeader);
listLi.appendChild(contenuLi);



//etape 4, maintenant accrocher la branche dans l'arbre. on
//accede au noeuc body avec document.body
document.body.appendChild(newHeader);
document.body.appendChild(contenuHeader);
document.body.appendChild(sousHeader);
document.body.appendChild(paragraphe);



