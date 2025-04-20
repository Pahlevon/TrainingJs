const gameState = {
    players: [],
    gameName : "Our Beautifull Game",
    copyrightYear : 2024,}


const addPlayers = (players) => {
    gameState.players.push(players)}

const removeLatestAddedPlayer = () => { 
    return gameState.players.pop()
}

addPlayers("Reza")
addPlayers("Sara")
addPlayers("Player with Bad Internet")

console.log("Players After Adding",gameState.players) //List Of Players

const valueofremoval = removeLatestAddedPlayer()
console.log("The Player That was Removed  :",valueofremoval)
// console.log(returnLatestAddedPlayer)
console.log("Current Players in The Game : ",gameState.players)