/**
 * Creation des cartes
 */

// Figures
const suits = ['pique', 'trèfle', 'coeur', 'carreau'];
// Valeurs
const values = ['Ace', 'Deux', 'trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf', 'Dix', 'Valet', 'Dame', 'Roi'];

//La main du joueur
let playerHand = [];
let delearHand = [];

function newGame() {
    let deck = shuffleDeck();
    delearHand.push(deck.pop());
    delearHand.push(deck.pop());
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());
    console.log(`Dealer: ${delearHand[0]}, ${delearHand[1]}`, `\nJoueur: ${playerHand[0]}, ${playerHand[1]}`)
}

function createDeck() {
    //Init deck
    let deck = [];
    //on recupere les cartes figures
    for (let suit in suits) {
        // puis on recup les valeurs
        for (let value in values) {
            deck.push(`${values[value]} de ${suits[suit]}`)
        }
    }


    return deck;
}





function shuffleDeck() {
    // appelle du deck
    let deck = createDeck();
    console.log(deck)
        //m et le nombre de carte dans le deck
    let m = deck.length;
    let i;

    while (m) {
        i = Math.floor(Math.random() * m--)
        console.log(i);
        //on switch le deck
        [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    console.log(deck);
    return deck;
}



document.getElementsByClassName("new-game-button")[0].addEventListener("click", newGame);