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
    let playerHand = [];
    let delearHand = [];
    document.getElementsByClassName("new-game-button")[0].classList.add("hidden");
    delearHand.push(deck.pop());
    delearHand.push(deck.pop());
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());
    //console.log(`Dealer: ${delearHand[0]}, ${delearHand[1]}`, `\nJoueur: ${playerHand[0]}, ${playerHand[1]}`)
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

//convertir valeur des cartes distribue

function convertValuesInNumber(values) {
    let hand = [];

    for(card in values){
        let cardValue = values[card].split(" ")[0];
        
        switch(cardValue) {
            case 'A':
                hand.push(1); break;
            case '2':
                hand.push(2); break;
            case '3':
                hand.push(3); break;
            case '4':
                hand.push(4); break;
            case '5':
                hand.push(5); break;
            case '6':
                hand.push(6); break;
            case '7':
                hand.push(7); break;
            case '8':
                hand.push(8); break;
            case '9':
                hand.push(9); break;
            case '10':
            case 'V':
            case 'D':
            case 'R':
                hand.push(10); break;
            default:console.log("Erreur !!");
            
        }
    }

    return hand;
}



document.getElementsByClassName("new-game-button")[0].addEventListener("click", newGame);