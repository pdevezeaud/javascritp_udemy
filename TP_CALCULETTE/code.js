let premierNombre;
let deuxiemeNombre;



do {

    choix = prompt("Que souhaitez vous faire\n\n 1 - Addition\n  2 - Multiplication\n  3 - Soustraction\n  4 - Division\n");

} while (choix == "" || choix == null)


switch (choix) {

    case "1":
        do {

            premierNombre = prompt("Entrer le premier nombre : ");
            premierNombre = Number(premierNombre);
            deuxiemeNombre = prompt("Entrez le second nombre : ");
            deuxiemeNombre = Number(deuxiemeNombre);
            
        } while (isNaN(premierNombre, deuxiemeNombre));
        
        function addition(nombreA, nombreB)
        {
            let resultat = nombreA + nombreB;
            return resultat;
           
        }

        console.log(addition(premierNombre,deuxiemeNombre));

        break;
        
        
        case "2":
            do {
                
                premierNombre = prompt("Entrer le premier nombre : ");
                nombreA = Number(premierNombre);
                deuxiemeNombre = prompt("Entrez le second nombre : ");
                deuxiemeNombre = Number(deuxiemeNombre);
                
            } while (isNaN(premierNombre, deuxiemeNombre));
            
            function multiplication(nombreA, nombreB){
                
                let resultatMultiplication = nombreA * nombreB;
                return resultatmultiplication;
            }
            break;
            
            case "3":
                do {
                    
                    premierNombre = prompt("Entrer le premier nombre : ");
                    premierNombre = Number(premierNombre);
                    deuxiemeNombre = prompt("Entrez le second nombre : ");
                    deuxiemeNombre = Number(deuxiemeNombre);
                    
                } while (isNaN(premierNombre, deuxiemeNombre));
                
                function soustraction(nombreA, nombreB){
                    
                    let resultatSoustraction = nombreA - nombreB;
                    return resultatSoustraction;
                }
                break;
                
                case "4":
                    do {
                        
                        premierNombre = prompt("Entrer le premier nombre : ");
                        let nombreA = Number(premierNombre);
                        deuxiemeNombre = prompt("Entrez le second nombre : ");
                        deuxiemeNombre = Number(deuxiemeNombre);
                        
                    } while (isNaN(premierNombre, deuxiemeNombre));
                    
                    function division(nombreA, nombreB){
                        
                        let resultatDivision = nombreA / nombreB;
                        return resultatDivision;
                    }
                    break;
                    
                    default:
                        console.log("les choix autorisée : 1 à 4 !!!")
                        break;
                    }



