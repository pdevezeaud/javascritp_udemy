
let btn = document.querySelector('button');
let div = document.querySelector('div');

let afficher = true;

div.style.display = "none";

btn.addEventListener('click', () => {
    if(afficher){
        btn.textContent = "cacher";
        div.style.display="block";
        afficher = false;
    }else {
        btn.textContent = "Afficher";
        div.style.display = "none";
        afficher = true;
    }

});