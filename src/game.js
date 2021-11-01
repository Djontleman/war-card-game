// ====== Game Class ====== //

const Card = require("./card");
const Deck = require("./deck");
const StandardDeck = require("./standardDeck");
const GameDeck = require("./gameDeck");
const Hand = require("./hand");
const Player = require("./player");
const Turn = require("./turn");
const Stage = require("./stage");

const Game = function() {
    this.player1Number = 1;
    this.player2Number = 2;

    this.player1;
    this.player2;

    this.winner = null;    
}

Game.prototype.start = function() {
    console.log("Game setting up");

    this.player1 = new Player(this.player1Number);
    this.player2 = new Player(this.player2Number);

    this.dealCards();

    // const startState = [];
    // for (card of this.player1.deck.cards) {
    //     startState.push(card.value);
    // }
    // console.log(startState);
    // return;

    console.log();
    console.log("Game begins!");
    console.log();

    // i = 20;
    do {
        // console.log(this.player1.deck);
        // console.log(this.player2.deck);

        const stage = new Stage;
        const turn = new Turn(this.player1, this.player2, stage);
        turn.startTurn();

        if (this.player1.deck.cards.length == 0) {
            this.winner = this.player2;
        } else if (this.player2.deck.cards.length == 0) {
            this.winner = this.player1;
        } 
        console.log("Player " + this.player1Number + "'s deck: " + this.player1.deck.cards.length);
        console.log("Player " + this.player2Number + "'s deck: " + this.player2.deck.cards.length);

        console.log();

        // const currentState = [];
        // for (i = 0; i < currentState.length; i++) {
        //     currentState.pop();
        // }
        // for (card of this.player1.deck.cards) {
        // currentState.push(card.value);
        // }
        // console.log(startState);
        // console.log(currentState);

        if (currentState == startState) {
            console.log("An infinite loop has been reached!")
            console.log("The game ends in a draw...")
            return;
        }
        
        // i--;
        // if (i == 0) {
        //     return;
        // }

    } while (this.winner == null);

    console.log("The game winner is player " + this.winner.playerNumber + "!");  
}

Game.prototype.dealCards = function() {
    const gameDeck = new GameDeck;
    gameDeck.buildDeck();
    gameDeck.shuffleDeck();
    for (i = 0; i < gameDeck.cards.length; i++) {
        if (i % 2 == 0) {
            this.player1.addCardToBottomOfDeck(gameDeck.cards[i]);
            // console.log(this.player1.deck)
        } else {
            this.player2.addCardToBottomOfDeck(gameDeck.cards[i]);
        }
    }
}

module.exports = Game;