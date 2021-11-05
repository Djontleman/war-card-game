# War Card Game Project
## About
This project aims to simulate a game of War! using JavaScript. The rules for War! can be found [here](https://www.dicegamedepot.com/war-card-game-rules/ "War Card Game Rules").
This is a follow-up to a collaborative project with zahir679 and CZboop, an exercise given to us as part of the Bright Network Technology Academy.

## Details
Run the index.js to simulate a game. The programme will simulate a two-player game. Each turn the programme the print the turn number, the card each player has played, the winner of that round and the cards remaining in each player's deck. The programme will also signify when a war has begun. A winner is declared once the game has ended, which should only take a couple of seconds.
* Due to the nature of the game, it is possible for the game to enter an infinite loop. The game has a maximum turn limit (currently set to 3000), where once the limit is reached the game ends in a draw. To read more about the infinite loop and turn limit choice, go [here](https://www.wimpyprogrammer.com/the-statistics-of-war-the-card-game/ "The Statistics of War (the card game)").

## Future Plans
Some of the possible future implementations:
* Add user interaction: Enter player name(s), have the user push the game forward
* Streamline code is at is currently quite verbose
* House rules such as: Lesser/Greater Spoils, Jokers, more than two players(?)
* Shuffling of cards won from a war
* Refactor code to use pure functions
* Thorough testing of methods

## Bug fixes
* 05/11/2021:
  * Added missing code so that game ended when one player didn't have enough cards for war
  * Fixed infinite loop by adding maximum number of turns, where the game is ended in a draw 
