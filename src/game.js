const Deck = require("./deck")
const StandardDeck = require("./standardDeck")
const StandardDeck = require("../standardDeck");
const GameDeck = require("./gameDeck");
const Player = require("./player");

const Game = function() {
    this.player1Number = 1;
    this.player2Number = 2;

    console.log("Game setting up");

    this.player1 = new Player(this.player1Number);
    this.player2 = new Player(this.player2Number);

    dealCards();

    
    
}

Game.prototype.dealCards = function() {
    const gameDeck = new GameDeck;
    gameDeck.buildDeck();
    gameDeck.shuffleDeck();
    for (i = 0; i < gameDeck.deck.length; i++) {
        if (i % 2 == 0) {
            this.player1.addCardToBottomOfDeck();
        } else {
            this.player2.addCardToBottomOfDeck();
        }
    }
}