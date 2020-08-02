//affectation par decompositon ou destructuring

let informations = ['superSayen','25','homme']

/*
affectatio par decompositon permet de ne pas toucher à l'integrité des données si
par exemple nous avions besoins de tester chaque informaiton comme l'age par
exemple
on crée une variable ou l'on stock l'informations ce qui evite
de toucher au tableau
*/

// methode sans decompositon
// let pseudo = informations[0];
// let age = informations[1];
// let sexe = informations[2];

//console.log(pseudo);

//avec la decomposition
let [pseudo, age,sexe] = informations;

console.log(age);


