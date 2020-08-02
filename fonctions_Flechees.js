// fonction anonyme
let maFunction = function(){
    console.log('test');
}

maFunction();

//function flechees
// si un seul parametre parenthese pas obligatioire
let maFunction = (parametre, autres_parametres) => {

}

ou

let maFunction = (a, b)=>console.log(a + b);
maFunction(10,10);

let maFonctionAmoi = prenom => console.log(prenom);
console.log(maFonctionAmoi('Philippe'));