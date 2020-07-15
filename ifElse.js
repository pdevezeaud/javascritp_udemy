let heure = 19;

// heure == 11
// heure != 11
// heure < 11
// heure > 11
// heure <= 11
// heure >= 11

if (heure <= 12) {
    console.log("c'est midi.");
}else if (heure <18)
{
    console.log("C'est l'après midi");
}else
{
    console.log("c'est le soir!!");
}


let age = 21;

if (age < 18){
    console.log("Vous n'etes pas majeur.")

}else if (age < 21){
    console.log("Vous etes majeur en France.")
}else {
    console.log("Vous etes majeur partout, à vous les casinos.");
}

/*
MEMO CONDITION
    == : égal à la valeur

    === : égal à la valeur et au type

    != : différent de la valeur

    !== : différent de la valeur et du type

    > : supérieur

    < : inférieur

    >= : supérieur ou égal

    <= : inférieur ou égal

*/