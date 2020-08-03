//permet de stocker cle valeur
// let monMap = new Map([
//     ['prenom', 'Mark'],
//     ['nom', 'Zuckerbeg']
// ]);

// //pour ajouter une valeur à un map utiliser set
// monMap.set('Poste','PDG de Facebook');
// monMap.delete('Poste');

// console.log(monMap);

/* U T I L I S A T I O N */
let utilisateurs = new Map();

utilisateurs.set('Mark Zuckerberg', {
    email: 'mark@facebook.com',
    poste: 'PDG',
});

utilisateurs.set('Philippe',{
    email: 'philippe@yahoo.fr',
    poste: 'Dekra',
});

console.log(utilisateurs);