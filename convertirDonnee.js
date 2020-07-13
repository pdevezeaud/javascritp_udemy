function demanderAge(age) {
    demandeAge = prompt("Entrer votre age ?");
    alert("vous avez "+ demandeAge+ " "+"ans");
}

demanderAge();




function prevoirAge(age) {
    demandeAge = prompt("Entrer votre age ?"); //stock en chaine de caractère.
    //ou
    //demandeAge = parseInt(demandeAge);
    //ou
     demandeAge = Number(demandeAge);
     //ou
     //demandeAge = parseFloat(demandeAge);

    //ou nombre vers chaine de caractère
     nombreEnString = nombre.toString();
     
    alert("Bientôt vous aurez "+ (demandeAge + 1)+" ans.");
}

prevoirAge();