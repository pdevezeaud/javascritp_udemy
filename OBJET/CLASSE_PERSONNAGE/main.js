class Personnage {

    
    constructor(pseudo,classe,sante,attaque) {
        this.pseudo  = pseudo;
        this.classe  = classe;
        this.sante   = sante;
        this.attaque = attaque;
        this.niveau  = 1;
    }
        
     evoluer(){
        this.niveau ++;
        console.log(this.pseudo + " passe au niveau " + this.niveau + " !")
    }
    
    verifierSante(){
        if (this.sante <= 0) {
            this.sante == 0; 
            console.log(this.pseudo + " a perdu !")
        }
        console.log("la santé est de " + this.sante);
        
    }

    get getinformations(){
        return this.pseudo + "( " + this.classe + " )" + " a " + this.sante + " points de vie et au niveau " + this.niveau + " !";
    }
}



merlin = new Personnage("Merlin","Magicien",100,15);
console.log(merlin);
console.log(merlin.evoluer());
console.log(merlin.verifierSante());
console.log(merlin.getinformations);


