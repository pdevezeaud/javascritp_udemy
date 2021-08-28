// // methode asynchrome vieille methode
// let a;
// let b;


// // setTimeout(() => {
// //   console.log('set A')
// //   a = 1;
// //   setTimeout(() => {
// //     console.log('set B')
// //     b = 2;
// //     let c = a + b;
// //     console.log(c);
// //   }, 2000);
// // }, 3000);

// // Avec les promesse
// let p1 = new Promise(function(resolve,reject) {

<<<<<<< HEAD
//   setTimeout(() => {
//     console.log('promesse A');
//     a = 2;
//     //J'ai fini le traitement je renvoi le resultat
//     resolve(a);  
//   }, 1000);
// });

// p1.then(function(a){

//   console.log("after " + a);

//   let p2 = new Promise(function(resolve,reject) {
//     setTimeout(() => {
//       console.log('promesse B');
//       b = 1;
//       //J'ai fini le traitement je renvoi le resultat
//       resolve(b);  
//     }, 3000);
//   });
//   return p2
// })

// .then(function(){
//   let c = a + b;
//   console.log('le resulat de A & B : '+ c)
// });


// /**
//  * 
//  * Possibilité de simplifié l'ecriture pour rendre plus lisible
//  */

//  let p1 = new Promise(function(resolve,reject) {

=======
>>>>>>> 1111ff90a13d165577548b6a8931e78ae42fb3c6
//   setTimeout(() => {
//     console.log('promesse A');
//     a = 2;
//     //J'ai fini le traitement je renvoi le resultat
//     resolve(a);  
//   }, 1000);
// });

<<<<<<< HEAD
=======
// p1.then(function(a){

//   console.log("after " + a);

//   let p2 = new Promise(function(resolve,reject) {
//     setTimeout(() => {
//       console.log('promesse B');
//       b = 1;
//       //J'ai fini le traitement je renvoi le resultat
//       resolve(b);  
//     }, 3000);
//   });
//   return p2
// })

// .then(function(){
//   let c = a + b;
//   console.log('le resulat de A & B : '+ c)
// });


// /**
//  * 
//  * Possibilité de simplifié l'ecriture pour rendre plus lisible
//  */

//  let p1 = new Promise(function(resolve,reject) {

//   setTimeout(() => {
//     console.log('promesse A');
//     a = 2;
//     //J'ai fini le traitement je renvoi le resultat
//     resolve(a);  
//   }, 1000);
// });

>>>>>>> 1111ff90a13d165577548b6a8931e78ae42fb3c6
// let p2 = new Promise(function(resolve,reject) {
//   setTimeout(() => {
//     console.log('promesse B');
//     b = 1;
//     //J'ai fini le traitement je renvoi le resultat
//     resolve(b);  
//   }, 3000);
// });

// // tableau pour rassembler les promesses
// let arr = [p1,p2];

// // La méthode all qui va attendre un tableau de promesse (arr)

// Promise.all(arr).then(function(resultat){
//   console.log(resultat);
// })


/**
 * 
<<<<<<< HEAD
 * async et await
 * 
=======
 * Async & Await
>>>>>>> 1111ff90a13d165577548b6a8931e78ae42fb3c6
 */
//  async function test() {
//   return await new Promise(
//     (resolve) => {
//       setTimeout(() => {
//         resolve('x')
//       }, 2000);

//     }
//   )
// }

<<<<<<< HEAD
async function test(){
  return await new Promise(
    (resolve) => {
      setTimeout(() => {
          resolve('x')
      }, 2000);
    }
  )

}

test().then(
  (result) => {console.log(result)}

)


const fn = (hello) => {
  console.log('hello');
}

fn('buenos dias');
=======
// test().then(
//   (result) => {
//     console.log(result);
//   }
// )


/**
 * memo sur les boucles
 * 
 */
// for
// const notes = [12,11,5,10,15];

// for (let i = 0; i < notes.length; i++){
//   console.log(notes[i]);
// }

//while

// let x = Math.random()  // entre 0 et 1
// while (x < 0.9) {
//   x = Math.random()
//   console.log(x);
// }

//do while
// let x;

// do {

//   x = Math.random()
//   console.log(x)
// } while (x < 0.9);

//for off
// a ne pas utiliser sur un objet, dans ce cas plutot utiliser for in
const notes = [12,11,5,10,15];
for (const note of notes) {
  console.log(note);
  
}


//for in
/**on déclare un objet */
const monObjectTest = {
  a:1
  b: "lol"
  c: true
}

for (const key in monObjectTest) {
  if (Object.hasOwnProperty.call(monObjectTest, key))
  const element = monObjectTest[key]
}
>>>>>>> 1111ff90a13d165577548b6a8931e78ae42fb3c6
