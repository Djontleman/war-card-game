// ====== Player Class ====== //

const Hand = require("./hand.js");
const Deck = require("./deck.js");

const Player = function(playerNumber) {
    this.playerNumber = playerNumber;
    this.hand = new Hand;
    this.deck = new Deck;
}

Player.prototype.drawCard = function() {
    const drawnCard = this.deck.removeCardFromTopOfDeck();
    this.hand.addCardToHand(drawnCard);
}

Player.prototype.playCardFromHand = function() {
    return this.hand.removeCardFromHand();
}

Player.prototype.addCardToBottomOfDeck = function(card) {
    this.deck.addCardToBottomOfDeck(card);
}

module.exports = Player;