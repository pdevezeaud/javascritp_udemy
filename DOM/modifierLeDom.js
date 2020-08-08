//si on selectionne part tagName il nous retourne un tableau car il y a plusieur h1
//il faudrat preciser l'index si l'on veut le selectionner.
let h1 = document.getElementsByTagName('h1')[0]
//let h1 = document.querySelector('h1');
h1.textContent = "Hello world";

//permet de modifier le code html. on ajoute au h1 un div
h1.innerHTML = "<div style='font-weight: normal'>Hello world</div>";