// ====== Standard Deck ====== //

const Card = require("./card");

const StandardDeck = function() {
    this.standardDeck = [Card(1, "Hearts", "Ace"),  Card(1, "Diamonds", "Ace"), Card(1, "Spades", "Ace"), Card(1, "Clubs", "Ace"),
                        Card(2, "Hearts", "2"),     Card(2, "Diamonds", "2"),   Card(2, "Spades", "2"),   Card(2, "Clubs", "2"),
                        Card(3, "Hearts", "3"),     Card(3, "Diamonds", "3"),   Card(3, "Spades", "3"), Card(3, "Clubs", "3"),
                        Card(4, "Hearts", "4"),     Card(4, "Diamonds", "4"),   Card(4, "Spades", "4"), Card(4, "Clubs", "4"),
                        Card(5, "Hearts", "5"),     Card(5, "Diamonds", "5"),   Card(5, "Spades", "5"), Card(5, "Clubs", "5"),
                        Card(6, "Hearts", "6"),     Card(6, "Diamonds", "6"),   Card(6, "Spades", "6"), Card(6, "Clubs", "6"),
                        Card(7, "Hearts", "7"),     Card(7, "Diamonds", "7"),   Card(7, "Spades", "7"), Card(7, "Clubs", "7"),
                        Card(8, "Hearts", "8"),     Card(8, "Diamonds", "8"),   Card(8, "Spades", "8"), Card(8, "Clubs", "8"),
                        Card(9, "Hearts", "9"),     Card(9, "Diamonds", "9"),   Card(9, "Spades", "9"), Card(9, "Clubs", "9"),
                        Card(10, "Hearts", "10"),   Card(10, "Diamonds", "10"), Card(10, "Spades", "10"), Card(10, "Clubs", "10"),
                        Card(11, "Hearts", "Jack"), Card(11, "Diamonds", "Jack"), Card(11, "Spades", "11"), Card(11, "Clubs", "11"),
                        Card(12, "Hearts", "Queen"), Card(12, "Diamonds", "Queen"), Card(12, "Spades", "12"), Card(12, "Clubs", "12"),
                        Card(13, "Hearts", "King"), Card(13, "Diamonds", "King"), Card(13, "Spades", "13"), Card(13, "Clubs", "13"),
                    ]
}

module.exports = StandardDeck;