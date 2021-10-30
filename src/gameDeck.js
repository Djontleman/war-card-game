// ====== GameDeck Class ====== //

const Deck = require("./deck")
const StandardDeck = require("./standardDeck");

const GameDeck = function() {
    Deck.call(this);
}

GameDeck.prototype.buildDeck = function() {
    const standardDeck = new StandardDeck(); 
    this.cards = standardDeck.cards;

    // this.deck = new StandardDeck.deck;
}

// todo: make shuffledDeck and unshuffledDeck Deck objects
GameDeck.prototype.shuffleDeck = function() {
    const unshuffledCards = this.cards;
    const shuffledCards = [];

    while(unshuffledCards.length > 0) {
        let randomNum = Math.floor(Math.random() * unshuffledCards.length);
        let randomCard = unshuffledCards[randomNum];
        unshuffledCards.splice(randomNum, 1);
        shuffledCards.push(randomCard);
    }

    this.cards = shuffledCards;
}

module.exports = GameDeck;