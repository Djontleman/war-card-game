// ====== Turn Class ====== //

const Player = require("./player");

const Turn = function(player1, player2, stage) {
    this.player1 = player1;
    this.player2 = player2;
    this.stage = stage;
    this.player1Card = null;
    this.player2Card = null;
}

Turn.prototype.startTurn = function() {

    console.log("Turn starting");

    this.player1.drawCard();
    this.player2.drawCard();

    this.player1Card = this.player1.playCardFromHand();
    this.player2Card = this.player2.playCardFromHand();
    console.log("Player " + this.player1.playerNumber +"'s card: " + this.player1Card.value);
    console.log("Player " + this.player2.playerNumber +"'s card: " + this.player2Card.value);

    let result = this.stage.compareCards(this.player1Card, this.player2Card);
    if (result == this.player1Card) {
        console.log("The winner is player " + this.player1.playerNumber);
        this.player1.addCardToBottomOfDeck(this.player1Card);
        this.player1.addCardToBottomOfDeck(this.player2Card);
    } else if (result == this.player2Card) {
        console.log("The winner is player " + this.player2.playerNumber);
        this.player2.addCardToBottomOfDeck(this.player1Card);
        this.player2.addCardToBottomOfDeck(this.player2Card);
    } else {
        console.log("War!");
        console.log();
        console.log("War begins...");
        do {
            if (this.player1.deck.cards.length < 4) {
                for (card of this.player1.deck.cards) {
                    this.stage.addCardToWarPile();
                }
                break;
            } else if (this.player2.deck.cards.length < 4) {
                for (card of this.player2.deck.cards) {
                    this.stage.addCardToWarPile();
                }
                break;
            } else {
            result = this.war();
            }
        } while (result == null);
    }
}

Turn.prototype.war = function() {


    this.stage.addCardToWarPile(this.player1Card);
    this.stage.addCardToWarPile(this.player2Card);
    this.stage.addRuleToWarPile(this.player1, this.player2, 3);

    this.player1.drawCard();
    this.player2.drawCard();

    this.player1Card = this.player1.playCardFromHand();
    this.player2Card = this.player2.playCardFromHand();
    console.log("Player " + this.player1.playerNumber +"'s card: " + this.player1Card.value);
    console.log("Player " + this.player2.playerNumber +"'s card: " + this.player2Card.value);

    let warResult = this.stage.compareCards(this.player1Card, this.player2Card);
    if (warResult == this.player1Card) {
        console.log("The winner of war is player " + this.player1.playerNumber);
        this.player1.addCardToBottomOfDeck(this.player1Card);
        this.player1.addCardToBottomOfDeck(this.player2Card);
        for (card of this.stage.warPile.cards) {
            this.player1.addCardToBottomOfDeck(card);
        }
        return this.player1Card;
    } else if (warResult == this.player2Card) {
        console.log("The winner of war is player " + this.player2.playerNumber);
        this.player2.addCardToBottomOfDeck(this.player1Card);
        this.player2.addCardToBottomOfDeck(this.player2Card);
        for (card of this.stage.warPile.cards) {
            this.player2.addCardToBottomOfDeck(card);
        }
        return this.player2Card;
    } else {
        console.log("War continues...");
        console.log();
    }
}

module.exports = Turn;