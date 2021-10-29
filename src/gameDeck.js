// ====== GameDeck Class ====== //

const Deck = require("./deck")
const StandardDeck = require("./standardDeck");

const GameDeck = function() {
    Deck.call(this);
}

GameDeck.prototype.buildDeck = function() {
    // const standardDeck = new StandardDeck(); 
    // this.deck = standardDeck.deck;

    this.deck = new StandardDeck.deck;
}

// todo: make shuffledDeck and unshuffledDeck Deck objects
GameDeck.prototype.shuffleDeck = function() {
    const unshuffledDeck = this.deck;
    const shuffledDeck = [];

    while(unshuffledDeck.length > 0) {
        let randomNum = Math.floor(Math.random() * unshuffledDeck.length);
        let randomCard = unshuffledDeck[randomNum];
        unshuffledDeck.splice(randomNum);
        shuffledDeck.push(randomCard);
    }

    this.deck = shuffledDeck;
}

module.exports = GameDeck;