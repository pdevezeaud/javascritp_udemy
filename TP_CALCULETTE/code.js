let premierNombre;
let deuxiemeNombre;
let resultat;
let autreCalcul = true;
let error;

while (autreCalcul == true ) {

do {

    choix = prompt("Que souhaitez vous faire\n\n 1 - Addition\n  2 - Multiplication\n  3 - Soustraction\n  4 - Division\n");

} while (choix == "" || choix == null || choix >=5)


switch (choix){ 

   
    case "1":
        do {

            premierNombre = prompt("Entrer le premier nombre : ");
            premierNombre = Number(premierNombre);
            deuxiemeNombre = prompt("Entrez le second nombre : ");
            deuxiemeNombre = Number(deuxiemeNombre);
            
        } while (isNaN(premierNombre, deuxiemeNombre));
        
        function addition(nombreA, nombreB)
        {
            resultat = nombreA + nombreB;
            return resultat;   
        }

        addition(premierNombre,deuxiemeNombre);
        break;
        
        
        
        
        case "2":
            do {
                
                premierNombre = prompt("Entrer le premier nombre : ");
                premierNombre = Number(premierNombre);
                deuxiemeNombre = prompt("Entrez le second nombre : ");
                deuxiemeNombre = Number(deuxiemeNombre);
                
            } while (isNaN(premierNombre, deuxiemeNombre));
            
            function multiplication(nombreA, nombreB)
        {
            resultat = nombreA * nombreB;
            return resultat;   
        }

        multiplication(premierNombre,deuxiemeNombre);
            break;

            
            case "3":
                do {
                    
                    premierNombre = prompt("Entrer le premier nombre : ");
                    premierNombre = Number(premierNombre);
                    deuxiemeNombre = prompt("Entrez le second nombre : ");
                    deuxiemeNombre = Number(deuxiemeNombre);
                    
                } while (isNaN(premierNombre, deuxiemeNombre));
                
                function soustraction(nombreA, nombreB)
        {
            resultat = nombreA - nombreB;
            return resultat;   
        }

        soustraction(premierNombre,deuxiemeNombre);
                break;
                
                case "4":
                    do {
                        
                        premierNombre = prompt("Entrer le premier nombre : ");
                        premierNombre = Number(premierNombre);
                        deuxiemeNombre = prompt("Entrez le second nombre : ");
                        deuxiemeNombre = Number(deuxiemeNombre);
                        
                    } while (isNaN(premierNombre, deuxiemeNombre));
                    
                    function division(nombreA, nombreB)
                    {
                        resultat = nombreA / nombreB;
                        return resultat;   
                    }
            
                    division(premierNombre,deuxiemeNombre);
                    break;


                    
                    default:
                        alert("les choix autorisée : 1 à 4 !!!");
                        break;
                }   

            alert("resultat de l'operation du choix "+ choix +" est : " + resultat);
            
             let autreChoix = prompt("Un autre calcul (o/n) ? : ")
              if (autreChoix == "o") {

                  autreCalcul = true;
              }else{
                autreCalcul = false;
                alert("Fin du programme")
            }            
             
        }
                
  

                    



