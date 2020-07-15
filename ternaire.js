let gareDepart = "Lyon";
// en mettant le pipe on propose un choix par défaut si l'utilisateurn ne repond pas
let gareDarrivee = prompt("Ou souhaitez-vous aller ?") || "Gare d'Angouleme";
let chauffeur ="Philippe";
/* si la gare de depart est null et que la gare d'arrivée et null
si on utilise || une des deux conditon validera le choix
avec & les deux doivent etre vrai.
utiliser les parenthese pour separer les controles dans les
conditions

ici true et false donne false donc le train ne peut demarrer;
*/

((gareDepart != "" || gareDarrivee != "") && chauffeur !="") ? alert("Le train vas demarrer à destination de " + gareDarrivee +'.') : alert("Le train ne peut demarrer");


// let x = 4;
// // [condition] ?[true]: [false]
// (x < 5) ? console.log("est plus petit que 5"): console.log("est plus grand que 5");