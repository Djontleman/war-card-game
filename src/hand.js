// ====== Hand Class ====== //

const Card = require("../card.js");

const Hand = function(card = null) {
    this.card = card;
}

module.exports = Hand;