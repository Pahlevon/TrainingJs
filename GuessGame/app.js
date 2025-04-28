const { gameState } = require("./gameState.js") //Using Named Imports With {}
const { startRound } = require("./startRound.js")
const { makeGuess } = require("./makeGuess.js")
const { addPlayer } = require("./players.js")
const { removeLatestPlayer } = require("./players.js")
const { gatherResults } = require("./gatherResults.js")
const { calculateFinalResult } = require("./calculateFinalResult.js")


const playerOne = "Reza"
const playerTwo = "Zahra"
// console.log("Current Players",gameState.players)
addPlayer(playerOne)
addPlayer(playerTwo)
// addPlayer("The Player With Bad Internet")
// console.log("Players After Adding",gameState.players)
// const playerThatWasRemoved = removeLatestPlayer()
// console.log("Player That Was Removed",playerThatWasRemoved)

// const welcomePlayer = (playerName) => {
//           console.log("Hello, Welocme To The Guessing Game :", playerName)

// }
// console.log("Copyright Year : ", gameState.copyrightYear)
// console.log("Name Of the Game is : ", gameState.gameName)
// welcomePlayer(playerOne)
// welcomePlayer(playerTwo)
startRound(0)
makeGuess(0, playerOne, 1969)
makeGuess(0, playerTwo, 1978)
// console.log(JSON.stringify(gameState,undefined,2))
const firstRoundResults = gatherResults(0)
console.log(JSON.stringify(firstRoundResults,undefined,2))

const finalResults = calculateFinalResult()
console.log(finalResults)