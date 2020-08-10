//1ere méthode : ecrit juste un texte. ecrit la suite au contenu
document.write('test');

//2eme methode : ajouter element brute
// on peut ajouter ou l'on veut dans la page
let h1 = document.querySelector('h1');
h1.append('test');

//3eme methode: (celle pour les objets)
// Creer l'element
let helloworld = document.createElement('div');

//Le personnaliser
helloworld.textContent ='Hello world !';

//l'ajouter à notre page, plusieurs methodes 
//document.body.append(helloworld); (après)
//document.body.appendChild(helloworld); moins utilisé (après)

//document.body.insertBefore(helloworld, document.querySelector('.container'));


//meilleur methode
document.querySelector('.container').prepend(helloworld);





