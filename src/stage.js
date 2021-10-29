// ====== Stage Class ====== //

const Deck = require("./deck");

const Stage = function() {
    this.warPile = new Deck;
}

Stage.prototype.compareCards = function(card1, card2) {
    if (card1.value >= card2.value) {
        return card1;
    } else {
        return card2;
    }
}

Stage.prototype.war = function() {}

module.exports = Stage;