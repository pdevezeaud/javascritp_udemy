class Personnage {

    
    constructor(pseudo,classe,sante,attaque) {
        this.pseudo  = pseudo;
        this.classe  = classe;
        this.sante   = sante;
        this.attaque = attaque;
        this.niveau  = 1;
    }
        
}

function evoluer(pseudo){
    pseudo += 1;
    return pseudo;
}

function verifierSante(sante){
    if (sante <= 0) {
        sante = 0; 
    }
    return sante;
}

