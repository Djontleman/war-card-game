// ====== Deck Class ====== //

const Deck = function() {
    this.deck = [];
    // this.numberOfCards = this.deck.length;
}

Deck.prototype.addCardToBottomOfDeck = function(card) {
    this.deck.unshift(card);
}

Deck.prototype.removeCardFromTopOfDeck = function() {
    return this.deck.pop();
}

module.exports = Deck;