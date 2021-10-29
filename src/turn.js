// ====== Turn Class ====== //

const Player = require("./player");

const Turn = function(player1, player2, stage) {
    this.player1 = player1;
    this.player2 = player2;
    this.stage = stage;
}

Turn.prototype.startTurn = function() {

    console.log("Turn starting");

    this.player1.drawCard();
    this.player2.drawCard();

    const player1Card = this.player1.playCardFromHand();
    const player2Card = this.player2.playCardFromHand();
    console.log("Player " + this.player1.playerNumber +"'s card: " + player1Card.value);
    console.log("Player " + this.player2.playerNumber +"'s card: " + player2Card.value);

    const result = this.stage.compareCards(player1Card, player2Card);
    if (result == player1Card) {
        console.log("The winner is player " + this.player1.playerNumber);
        this.player1.addCardToBottomOfDeck(player1Card);
        this.player1.addCardToBottomOfDeck(player2Card);
    } else {
        console.log("The winner is player " + this.player2.playerNumber);
        this.player2.addCardToBottomOfDeck(player1Card);
        this.player2.addCardToBottomOfDeck(player2Card);
    }
}