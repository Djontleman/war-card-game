// ====== Deck Class ====== //

const Deck = function() {
    this.cards = [];
    // this.numberOfCards = this.deck.length;
}

Deck.prototype.addCardToBottomOfDeck = function(card) {
    this.cards.unshift(card);
}

Deck.prototype.removeCardFromTopOfDeck = function() {
    return this.cards.pop();
}

module.exports = Deck;