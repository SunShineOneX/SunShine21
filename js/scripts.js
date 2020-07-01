// ============================================================
// ======================= SunShine 21 ========================
// ============================================================

// General Layout:
// ------------------------------------------------------------
// 1. Create a deck of cards
//      - This includes 4 french suits (Clubs, Diamonds, Hearts, and Spades)
//      - Each suite has 13 cards
//      - Each suite contains an Ace, King, Queen, and a Jack.

// Game Rules:
// ------------------------------------------------------------
// The goal of blackjack is to beat the dealer's hand without going over 21.
// Face cards are worth 10. Aces are worth 1 or 11, whichever makes a better hand.
// Each player starts with two cards, one of the dealer's cards is hidden until the end.
// To 'Hit' is to ask for another card. To 'Stand' is to hold your total and end your turn.
// If you go over 21 you bust, and the dealer wins regardless of the dealer's hand.
// If you are dealt 21 from the start (Ace & 10), you got a blackjack.
// Blackjack usually means you win 1.5 the amount of your bet. Depends on the casino.
// Dealer will hit until his/her cards total 17 or higher.
// Doubling is like a hit, only the bet is doubled and you only get one more card.
// Split can be done when you have two of the same card - the pair is split into two hands.
// Splitting also doubles the bet, because each new hand is worth the original bet.
// You can only double/split on the first move, or first move of a hand created by a split.
// You cannot play on two aces after they are split.
// You can double on a hand resulting from a split, tripling or quadrupling you bet.
const dealer = {
    hand: []
}

const player1 = {
    hand: [],
    money: 500
};


// class Deck {
//     constructor(suite, name, value) {
//         this.suite = suite;
//         this.name = name;
//         this.value = value;
//     }
// }

// Declare Suites and their values
let suites = ["Spades", "Clubs", "Hearts", "Diamonds"];
let values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

// Function to create the deck
let createDeck = () => {
    let deck = new Array();
    for (let x = 0; x < suites.length; x++) {
        for (let y = 0; y < values.length; y++) {
            let thisCard = {
                Value: values[y],
                Suite: suites[x]
            };
            deck.push(thisCard);
        }
    }
    return deck;
}

console.log(createDeck())

// How to populate a new array? Make each suite an array. Each card is an object. ex.  
// LOL :]
// console.log(deck);


// ============================================================
// Game Start function ========================================
// ============================================================

// gameStart = () => {
//     drawCards;
// }


// ============================================================
// Dealer Logic ===============================================
// ============================================================

// let dealerLogic = () => {
//     if (dealersCards < 17) {
//         draw();
//     } else if (dealersCards >= 17)
//         stand();
// }

// ============================================================
// Deal function ==============================================
// ============================================================
//  
let playerDeal = () => {
    while (player1.bank > 0) {
        player1.hand = deck.push()
        
    }
}

console.log(playerDeal);

// Dealers draws 2 cards
// Player draws 2 cards
// Evaluate but players cards and if anyone has hit 21 or not
// Do you want to hit, stand, or stay?


// ============================================================
// Hit function ===============================================
// ============================================================



// ============================================================
// Stand function =============================================
// ============================================================



// ============================================================
// Stay function ==============================================
// ============================================================



// ============================================================
// Increase Gems function =====================================
// ============================================================


// ============================================================
// Win function ===============================================
// ============================================================