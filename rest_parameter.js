//permet de passer un nombre d'argument non défini.
// en mettant ... devant le parametre on indique qu'il y aura
// plusieurs parametres

function addition(...nombre){
   
    let resultat = 0;
    
    //on cree une fonction fléchée à partir de nombre.
    //pout iterer sur les arguments de nombre.
    nombre.forEach(nombre => {
            
        resultat += nombre;
            
        });
        return resultat;
    }

console.log(addition(10, 10, 10));