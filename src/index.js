// ====== Main ====== //
// This is where the game is run

const Card = require("./card");
const Deck = require("./deck");
const StandardDeck = require("./standardDeck");
const GameDeck = require("./gameDeck");
const Hand = require("./hand");
const Player = require("./player");
const Turn = require("./turn");
const Stage = require("./stage");
const Game = require("./game");

const game = new Game;
game.start();