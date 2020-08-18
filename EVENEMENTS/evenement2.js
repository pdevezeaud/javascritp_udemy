let a = document.querySelector('a');
let button = document.querySelector('button');

//ancienne méthode

a.onclick = function (){
    if(confirm("Etes vous sur ?")){
        location.href = "https://believemy.com"
    }
}

//Methode plus récente fonction anonyme

a.onclick = () => {
 if(confirm("Etes vous sur ?")){
     location.href = "https://www.google.fr"
 }else {
     a.remove();
 }
};


button.onmouseover = () => {
    document.body.style.backgroundColor = 'orange';
} 

button.onmouseout = () => {
    document.body.style.backgroundColor = 'white';
}



