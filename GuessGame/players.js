const {gameState} = require("./gameState.js") //Using Named Imports With {}

const addPlayer = (playerName) => {
          gameState.players.push(playerName)
}

const removeLatestPlayer = () => {
          return gameState.players.pop()
}

module.exports = {
          addPlayer,
          removeLatestPlayer,
}