//design une fonction dans une fonction

// function bonjour(prenom){
//     let resultat = "bonjour " + prenom;

//     let maclosure = ()=> console.log(resultat) 
//         return maclosure;
    
// }

// let fonctionBonjour = bonjour('Philippe');
// fonctionBonjour();

/*
autre exemple
*/
function timer(){
    let secondes = 0;  //variable local à zero

    let maClosure = () => {
        return ++secondes;  //va ajouter 1 à seconde
    }
    return maClosure;
}

let monTimer = timer();
console.log(monTimer());  //retourne 1 vu que ma closure a stocké 1
console.log(monTimer()); //retourne deux car incrmente seconde de plus 1

//le but des closures est de conservé les variables local d'une foncton.

