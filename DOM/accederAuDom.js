let header = document.getElementsByTagName('header')
let logo = document.getElementById('logo');
let container = document.getElementsByClassName('container');
console.log(header);
console.log(logo);
console.log(container);

//il existe une methode qui permet de recuperer l'information de facon unique
// via queryselector
//on met # si id sinon le point si classe
let h1 = document.querySelector('h1');

//si je veux par exemple recuperer toutes les balises p
//idem por les id ou les classes . ou # devant
let p = document.querySelectorAll('p');


console.log(h1);
console.log(p)



