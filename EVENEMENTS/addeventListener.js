let a = document.querySelector('a');
let button = document.querySelector('button');



// (e) lettre pour le parametre lié à l'evenement

a.addEventListener('click', () => {
    if(confirm("Etes vous sur de supprimer !")){
        location.href="https://believemy.com"
    } 
});



function backgroundWhite(){
    document.body.style.backgroundColor ="white";
}


button.addEventListener('mouseover', () => {
    
    document.body.style.backgroundColor ="orange";

});

button.addEventListener('mouseout', backgroundWhite);

button.addEventListener('mouseout', () => {
    document.body.style.fontFamily = 'arial';
});

//pour supprimer un evenement
button.removeEventListener('mouseout', backgroundWhite);