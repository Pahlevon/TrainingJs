const { gameState } = require("./gameState")
const {questions} = require("./questions.js") //Using Named Imports With {}


const startRound = (roundNumber)=>{
console.log(`\n--- Round ${roundNumber} ---`)
console.log("Here's Your Question ! ")
const specificQuestion = questions[roundNumber]
console.log(specificQuestion.questions)
gameState.rounds.push({
          guesses:[],
          questions:specificQuestion
})
}

module.exports = {startRound,}