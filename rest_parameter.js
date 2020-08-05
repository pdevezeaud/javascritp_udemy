//permet de passer un nombre d'argument non défini.
// en mettant ... devant le parametre on indique qu'il y aura
// plusieurs parametres

function addition(...nombre){
   
    
    //on cree une fonction fléchée à partir de nombre.
    //pout iterer sur les arguments de nombre.
    nombre.forEach(nombre => {
            console.log(nombre);
    });
}

addition(4,9,5,415,78,54);