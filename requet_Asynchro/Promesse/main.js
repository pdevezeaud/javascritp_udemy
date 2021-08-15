

// les promesse
// Elle peuvent prendre plusieur valeur
// en cours / Honoré / Rompue

//const promise = new promise((resolve, reject) => {
    // Nos taches asynchromes



    // Promesse Honorée : resolve()


    //promesse rompue : reject()
//});

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

const promesse = chargerScript('test.js');

promesse.then(
    function(result) {
        console.log(result);
    },
    function(error) {
        console.log(error)
    }
);