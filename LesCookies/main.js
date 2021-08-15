// creer cookie
document.cookie = 'Prenom=Philippe';
// afficher cookie
alert(document.cookie);

//modifier un cookie
document.cookie = 'prenom=Mark';

//supprimer un cookie
document.cookie = 'prenom=';

//option
document.cookie = 'prenom=john; path=/';

document.cookie = 'prenom=john; path=/; domain=auto-contact.com';

let date = new Date(Dat.now() + 1000000)
date = date.toUTCString();
document.cookie = 'prenom=john; path=/; secure;;

document.cookie = 'prenom=john; path=/';