let montableauAssociatif = {
    'prenom' : 'Philippe',
    'Nom'    : 'Devezeaud',
    'Poste'  : 'Ingenieur'
};

//pour concatener un tableau associatif il faut utiliser une
//boucle for in ou for of
// a chaque valeur on va concater dans une nouvelle variable
// qui va contenir les nouvelles valeurs.
// on declare une variable vide 

// let chaine = '';

// for (const valeur in montableauAssociatif) {
//     chaine += (valeur + ' : ' + montableauAssociatif[valeur] + '\n');
// }

// console.log(chaine);   

// let mesAlimentsPreferes = [['chocolat', 'gaufre', 'crêpe'], ['banane', 'pomme', 'cerise'], ['carotte', 'pomme de terre', 'brocolis']];
// console.log('Mon aliment préféré : ' + mesAlimentsPreferes[0][2]);

function concatener(tableau) {
    let chaine = '';
    for (const valeur in tableau) {
        chaine += (valeur + ' : ' + tableau[valeur] + '\n');
        

    }

    console.log(chaine);
}

concatener(montableauAssociatif);


