
//selection de Inpout dans le htmml.
//on ecoute l'evenement sur ID cp et l'input.
document.querySelector('#cp').addEventListener('input', function () {
    //on test si il entre 5 carateres 
<<<<<<< HEAD
    if (this.value.length == 5) {
=======
    if(this.value.length == 5) {
>>>>>>> 6830fac8b73a0af507088efeb8d117cb7c494f1e
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;

        fetch(url).then((reponse) =>
            reponse.json().then((data) => {
                console.log(data);
                let affichageUl = '<ul>';
                //boucle pour recuperer toute les villes dans un <li>
                for (const ville of data) {
                
                    //on ajoute a affiche un  <li> dans le <ul>
                    affichageUl += `<li><strong>${ville.nom}</strong> - ${ville.population} habitants.</li>`
                } 
                affichageUl +='</ul'; // on ferme le ul de l'affichageUl

                // on selection id ville pour afficher dans le HTML avec le innerhtml
                document.querySelector('#ville').innerHTML = affichageUl;

            })
        ).catch(error => console.log('Erreur : ' + error))
    
    }
});
