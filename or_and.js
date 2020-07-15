let gareDepart = "cognac";
let gareDarrivee = "";
let chauffeur ="";
/* si la gare de depart est null et que la gare d'arrivée et null
si on utilise || une des deux conditon validera le choix
avec & les deux doivent etre vrai.
utiliser les parenthese pour separer les controles dans les
conditions

ici true et false donne false donc le train ne peut demarrer;
*/

if ((gareDepart != "" || gareDarrivee != "") && chauffeur !="") {
    console.log("Le train vas demarrer");   
}else {
    console.log("Le train ne peut demarrer");
}
    
