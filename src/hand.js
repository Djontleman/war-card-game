// ====== Hand Class ====== //

const Card = require("../card.js");

const Hand = function() {
    this.card = [];
}

Hand.prototype.addCardToHand = function(card) {
    this.card.push(card);
}

Hand.prototype.removeCardFromHand = function() {
    return this.card.pop();
}

module.exports = Hand;