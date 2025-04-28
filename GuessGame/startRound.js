const { gameState } = require("./gameState")
const {questions} = require("./questions.js") //Using Named Imports With {}


const startRound = (roundNumber)=>{
console.log(`\n--- Round ${roundNumber+1} ---`)
console.log("Here's Your Question ! ")

const specificQuestion = questions[roundNumber]
console.log(specificQuestion.Question)

gameState.rounds.push({
          forms:[roundNumber],
          questions:specificQuestion
})
}

module.exports = {startRound,}