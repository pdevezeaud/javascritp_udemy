//fonctionne pour les simples et à plusieurs dimensions
//ajoute, supprime

let montableau =["un","deux","trois","quatre"];
//ici on ajoute
montableau.splice(0,0,"random","pie");
//console.log(montableau);
//ici on supprime à partir de l'index et deux elements
montableau.splice(0,3)
//console.log(montableau);




let monTableau2d = [
    ['marc','jeff','bil'], // ---> 0
    ['zuck','bezos','Gates'] // ---> 1
];
//ici je supprime le premier tableau index 0 puis l'element marc qui se trouve à l'index 0 en premiere position
//monTableau2d[0].splice(0,1);
//console.log(monTableau2d);

//pour ajouter un tableau on se met à l'index 2,0 on ne supprime rien puis ajout entre crochet
monTableau2d.splice(2,0,['toto','tata','titi']);
console.log(monTableau2d);

