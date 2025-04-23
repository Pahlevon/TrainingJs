const {gameState} = require("./gameState.js") //Using Named Imports With {}


const makeGuess = (roundNumber, playerName, guess) => {
          if (!gameState.rounds[roundNumber]) {
                    throw new Error(`Round ${roundNumber} does not exist.`);
          }

          gameState.rounds[roundNumber].forms.push(
                    {
                              player: playerName,
                              guess: guess,
                    }
          )
}

module.exports = {makeGuess,}