// let monTableau = ['un','deux','trois'];
// // suppression du dernier element avec pop
// //monTableau.pop();
// //console.log(monTableau);
// //suppression du premier element avec shift
// monTableau.shift();
// console.log(monTableau);



// let monTableau2D = [
//     ['Mark','Bill','Philippe'], //--->0
//     ['Zuckberberg','Bezos','Gates']  //--> 1
// ];

// //supprime l'information philippe de l'index 0
// monTableau2D[0].pop();
// monTableau2D[1].pop();
// console.log(monTableau2D);



let monTableauAssociatif = {
    'prenom' : 'Mark',
    'Nom' : 'Zuckerberg',
    'poste' : 'PDG de Facebook'
};

delete(monTableauAssociatif.poste);
console.log(monTableauAssociatif);

