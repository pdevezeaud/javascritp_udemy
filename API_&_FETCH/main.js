
//selection de Inpout dans le htmml.
//on ecoute l'evenement sur ID cp et l'input.
document.querySelector('#cp').addEventListener('input', function () {
    //on test si il entre 5 carateres 
    if(this.value.lenght == 5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;

        fetch(url).then((response) => 
        response.json().then((data) => console.log(data))
        );
    }
});
