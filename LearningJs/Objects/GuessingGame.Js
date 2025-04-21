const gameState = {
    Players: [],
    Rounds: [],
    Guesses: []
}

// Array of Questions With Q Object and Answers
const questions = [
    {
        Question: "What is the capital of France?",
        Answer: "Paris",
    },
    {
        Question: "What is the largest planet in our solar system?",
        Answer: "Jupiter",
    },
    {
        Question: "What is the smallest prime number?",
        Answer: "2",
    },
    {
        Question: "What is the longest river in the world?",
        Answer: "Nile",
    }
]



//Funcction : Adding Players to the Game 
const playerName = (player1 , player2) => { 
    gameState.Players.push(player1,player2);
    console.log("Welcome To The Guess Game  : "
        + gameState.Players[0] + " and " + gameState.Players[1] 
        + "! Let's begin!")
}






 playerName("Reza" , "Zahra")

 const startGame = ()=>{
    console.log("Game is starting...");
    console.log(questions[0].Question)
    gameState.Rounds.push(1)
 }

 startGame()