const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// AVEC LES CALL BACK
//const demarrerProgramme = function () {
// rl.question('quel est ton prenom ?', reponse =>  {
    // console.log('Ton prenom est : ' + reponse); 
//    })    
// 
//    rl.question('quel est ton nom ?', reponse =>  {
    // console.log('Ton nom est : ' + reponse);
    // rl.close();
//    })    
// }

/**
 * autre methode avec la promesse
 */

 const demanderAge = () => {
    return new Promise(resolve =>{
       rl.question('Quel est ton Age ? ', resolve)
    })
}  


const demanderPrenom = () => {
  return new Promise(resolve =>{
     rl.question('Quel est ton prenom ? ', resolve) 
  })  
}

const demanderNom = () => {
    return new Promise(resolve =>{
       rl.question('Quel est ton nom ? ', resolve)
    })  
  }

    const demarrerProgramme = () => {
    demanderPrenom()
    .then(prenom =>{
        console.log('ton prénom est ' + prenom);
   
    return demanderNom()
        
    })
    .then(nom => {
        console.log('ton nom est ' + nom);
        
        return demanderAge()
    })

    .then(age => {
        console.log('ton age est ' + age);
        rl.close()

    })
}   


demarrerProgramme();