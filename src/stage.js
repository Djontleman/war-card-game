// ====== Stage Class ====== //

const Deck = require("./deck");
const Player = require("./player");

const Stage = function() {
    this.warPile = new Deck;
}

Stage.prototype.compareCards = function(card1, card2) {
    if (card1.value > card2.value) {
        return card1;
    } else if (card1.value < card2.value) {
        return card2;
    } else {
        return null;
    }
}

Stage.prototype.addCardToWarPile = function(card) {
    this.warPile.addCardToBottomOfDeck(card);
}

Stage.prototype.addRuleToWarPile = function(player1, player2, rule) {
    for (i = 0; i < rule; i++) {
        this.warPile.addCardToBottomOfDeck(player1.deck.removeCardFromTopOfDeck());
        this.warPile.addCardToBottomOfDeck(player2.deck.removeCardFromTopOfDeck());
    }
}

module.exports = Stage;