function chargerScript(script){
    return new Promise((resolve, reject) => {

        // on cree l'elemnt script dans le html
        let element = document.createElement('script');
        element.src = script;
        document.head.append(element);

        //deux possibilités : resolve
        element.onload = () => resolve('fichier ' + script + ' a été chargé');


        // reject()
        element.onerror = () => reject(new Error('Operation impossible pour le scrip' + script));
    });
}


async function resultat() {
    try {
        const scriptA = await chargerScript('test.js');
        console.log(scriptA);
        
    } catch (error) {
        console.log(error);
    }
}

resultat();



// Async et Await "sucre sytaxiques"

//  async function direBonjour() {
//     const promesse = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('promesse tenu !'), 3000);
//     });

//     let resultat = await promesse;
//     console.log(resultat)
// }

// direBonjour();