class Personnage {
    constructor(pseudo, classe, sante, attaque){
        this.pseudo  = pseudo;
        this.classe  = classe;
        this.sante   = sante;
        this.attaque = attaque;
        this.niveau  = 1; 
    }

    get informations(){
        return this.pseudo + "(" + this.classe + " ) a " + this.sante + " points de vie et est au niveau " + this.niveau + " . ";
    }
    
    // dans la classe pas obligatoir de mettre le mot fonction pour les méthodes
    evoluer() {
    this.niveau ++;
    console.log(this.pseudo + ' passe au niveau' + this.niveau + ' !');

};

    verifierSante(){
        if(this.sante <= 0){
            this.sante == 0;
            console.log(this.pseudo + ' a perdu !');
        }
    };

   

}

/************/

class Magicien extends Personnage {
    constructor(pseudo){
        super(pseudo, "magicien", 170, 90);
    }


    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' en lançant un sort (' + this.attaque + ' degats)');
        this.evoluer();
        personnage.verifierSante();

    }


    coupSpeciale(personnage){
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + ' attaque avec son coup spéciale puissance des Arcanes ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégâts)');
        this.evoluer();
        personnage.verifierSante();
    }
}



class Guerrier extends Personnage {
    
    constructor(pseudo){

        super(pseudo, "Guerrier", 350, 50);
    }
   

   attaquer(personnage){
    personnage.sante -= this.attaque;
    console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' avec son epée (' + this.attaque + ' degats)');

    }

    coupSpeciale(personnage){
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + ' attaque avec son coup spéciale Hache de Guerre ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégâts)');
        personnage.verifierSante();
        this.evoluer();
        
    }
}

    let saque = new Guerrier("saqué");
    console.log(saque.informations);
    let Gandhalf = new Magicien('Gandhalf')
    console.log(Gandhalf.informations);
    saque.attaquer(Gandhalf);
    console.log(Gandhalf.informations);

    
    