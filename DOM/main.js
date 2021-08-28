// // objet windows (represente toute la fenetre du navigateur)
// //objet document (represente la page internet)

// //selectionner un objet par son ID
// let title = document.getElementById('title');

// //recupere uniquement le text
// console.log(title.innerText);

// //recupere uniquement le HTML & le text
// console.log(title.innerHTML);

// //modifier le contenu text
// title.innerText = "Nouveau Titre"

// //modifier le contenu html
// title.innerHTML = '<strong>Nouveau</strong> titre';

// //selectionner par les class (renvoi un tableau)
// let citation = document.getElementsByClassName('citation');
// console.log(citation);  //retourne un tableau
// console.log(citation[1]); //cible l'index 1 

// //selection par leurs balises
// let paragraphe = document.getElementsByTagName('p');
// console.log(paragraphe); //retourne un tableau si plusieurs elements
// console.log(paragraphe[0].innerText)

//possibilité de selectionner à la methode css avec querySelector
// console.log(document.querySelector('.citation'));

// recuperer des attributs HTML
// let a = document.querySelector('a');
// a.getAttribute("href"); // on recupere le href de l'element a

// //pour modifier l'attribut
// a.setAttribute('href', 'https://www.weformyou.fr');


// // modifier le style css
// document.querySelector('p').style.backgroundColor='#aaaa';

// //recuperer la liste des classes Css d'un element HTml
// console.log(document.querySelector('p').classList);

//Ajouter une classes Css d'un element HTml
// document.querySelector('p').classList.add('fondVert');

// //Supprimer une classes Css d'un element HTml
// document.querySelector('ul li').classList.remove('fondVert');

//selectionner les elements paire (even) nth-child--> enfant
let tabLi = document.querySelectorAll('ul li:nth-child(even)');
console.log(tabLi);
for(let li of tabLi){
    li.classList.add('fondVert');
}

//tester la prensence d'une class css sur un element HTML
if(document.querySelector('li:nth-child(2)').classList.contains('fondVert')){
    console.log('la classe fond vert est affecté !!');
}


//Echanger la presence d'une classe css a un element HTML
document.querySelector('p').classList.toggle('fondVert')

//deplacer des elements ou un element html
document.querySelector('p').append(document.querySelector('h1'));

