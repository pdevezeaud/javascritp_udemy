
//selectionner les elements
let btn = document.querySelector('button');
let div = document.querySelector('div');

// afficher est à true le message est caché
let afficher = true;

//cacher le message
div.style.display = "none"; 

//detection du click 
btn.addEventListener('click', () => {
    if(afficher){
        btn.textContent = "Cacher";
        div.style.display="block";
        afficher = false;
    }else {
        btn.textContent = "Afficher";
        div.style.display = "none";
        afficher = true;
    }

});