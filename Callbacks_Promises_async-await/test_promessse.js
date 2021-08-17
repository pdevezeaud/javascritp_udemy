// methode asynchrome vieille methode
let a;
let b;


// setTimeout(() => {
//   console.log('set A')
//   a = 1;
//   setTimeout(() => {
//     console.log('set B')
//     b = 2;
//     let c = a + b;
//     console.log(c);
//   }, 2000);
// }, 3000);

// Avec les promesse
let p1 = new Promise(function(resolve,reject) {

  setTimeout(() => {
    console.log('promesse A');
    a = 2;
    //J'ai fini le traitement je renvoi le resultat
    resolve(a);  
  }, 1000);
});

p1.then(function(a){

  console.log("after " + a);

  let p2 = new Promise(function(resolve,reject) {
    setTimeout(() => {
      console.log('promesse B');
      b = 1;
      //J'ai fini le traitement je renvoi le resultat
      resolve(b);  
    }, 3000);
  });
  return p2
})

.then(function(){
  let c = a + b;
  console.log('le resulat de A & B : '+ c)
});


/**
 * 
 * Possibilité de simplifié l'ecriture pour rendre plus lisible
 */

 let p1 = new Promise(function(resolve,reject) {

  setTimeout(() => {
    console.log('promesse A');
    a = 2;
    //J'ai fini le traitement je renvoi le resultat
    resolve(a);  
  }, 1000);
});

let p2 = new Promise(function(resolve,reject) {
  setTimeout(() => {
    console.log('promesse B');
    b = 1;
    //J'ai fini le traitement je renvoi le resultat
    resolve(b);  
  }, 3000);
});

// tableau pour rassembler les promesses
let arr = [p1,p2];

// La méthode all qui va attendre un tableau de promesse (arr)

Promise.all(arr).then(function(resultat){
  console.log(resultat);
})
