/**
 * Creation des cartes
 */

// Figures
const suits = ['<span class=\'bold\'>&#9824</span>', '<span class=\'bold\'>&#9827</span>', '<span class=\'bold red-card\'>&#9829</span>', '<span class=\'bold red-card\'>&#9830</span>'];
// Valeurs
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'V', 'D', 'R'];

//La main du joueur
let deck;

function newGame() {
    deck = shuffleDeck();
    let playerHand = [];let delearHand = [];
    document.getElementsByClassName("new-game-button")[0].classList.add("hidden");
    delearHand.push(deck.pop());
    delearHand.push(deck.pop());
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());
    console.log(`Dealer: ${delearHand[0]}, ${delearHand[1]}`, `\nJoueur: ${playerHand[0]}, ${playerHand[1]}`)
}

function createDeck() {
    //Init deck
    deck = [];
    //on recupere les cartes figures
    for (let suit in suits) {
        // puis on recup les valeurs
        for (let value in values) {
            deck.push(`${values[value]}  ${suits[suit]}`);
        }
    }


    return deck;
}





function shuffleDeck() {
    // appelle du deck
    deck = createDeck();
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