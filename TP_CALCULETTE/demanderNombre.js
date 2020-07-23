

let premmierNombre;
let deuxiemeNombre;


do {
    
    premierNombre = prompt("Entrer le premier nombre : ");
    premierNombre = Number(premierNombre);
    deuxiemeNombre = prompt("Entrez le second nombre : ");
    deuxiemeNombre = Number(deuxiemeNombre);
    
} while ( isNaN(premierNombre,deuxiemeNombre));
