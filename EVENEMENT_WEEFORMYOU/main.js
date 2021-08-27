let tableauDetr = document.querySelectorAll('tbody tr')

for (tr of tableauDetr) {
    // attention au function anonyme par rapport à THis
    tr.addEventListener('click', function () {

        this.classList.toggle('gris');
    });
}

document.querySelector('a').addEventListener('click', function(event){
    //la balise a a un etat par défaut pour le casser il faut utiliser le preventdefault
    event.preventDefault();

    // je vais recuperer le Href 
    let targetHref = this.getAttribute('href');
    console.log(targetHref);
    let message = confirm('Souhaitez vous quittez le site ?');
    console.log(message);
    if(message == true) {
        window.location = targetHref; //redirection vers autre pages
    }else {
        alert("C'est cool de rester avec nous!!!")
    };
});
