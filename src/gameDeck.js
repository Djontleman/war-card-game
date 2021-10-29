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