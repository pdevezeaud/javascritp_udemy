//fonction permet d'utiliser les fonctions anonymes

let listeDePays = ['France','Belgique','Japon','Maroc'];

// for (const pays of listeDePays) {
//     console.log(pays);
// }

//utilisation de la fonction anonyme
listeDePays.forEach(function (pays){
    console.log(pays);
});

// ecriture simplifié de la fonction anonyme
listeDePays.forEach(pays => console.log(pays));





    
