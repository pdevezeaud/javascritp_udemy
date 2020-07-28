let monTableau = ['un','deux','trois'];

//Ajout au début du tableau
//monTableau.unshift('zero');

//Ajout push ajout à la fin du tableau
monTableau.push('Cinq');
console.log(monTableau);


let monTableau2D = [
    ['Mark','Bill'],
    ['Zuckberberg','Bezos','Gates']
];

// /*Pour l'ajout au tableau a 2 dimension il
// il faut preciser l'index
// */
monTableau2D[0].push('test');
console.log(monTableau2D);



let monTableauAssociatif = {
    'prenom' : 'Mark',
    'Nom' : 'Zuckerberg',
    'poste' : 'PDG de Facebook'
};
//si l'on veut ajouter un element il suffit de remplir le champs entre crocher et de
// renseigner la valeur à ajouter et egal ( = ) 
monTableauAssociatif['Nationalite'] = 'Americaine';
console.log(monTableauAssociatif);