let prenom = "john";
let bonjour = `Bonjour ${prenom}`;
console.log(bonjour);

//exemple avec les dates
let date = new Date().getFullYear();
let copyright = `${date} @ Philippe devezeaud`;
console.log(copyright)

//ou encore plus pratique : des calculs
//objet litteral
let aliments = {
    fruits:5,
    legumes:1,
    biscuits:75,

}

let panier = `Dans votre panier, vous avez ${aliments.fruits + aliments.legumes + aliments.biscuits} articles`;
console.log(panier);