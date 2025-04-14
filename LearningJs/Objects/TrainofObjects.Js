const gameState = {
    players: [],
    gameName : "Our Beautifull Game",
    copyrightYear : 2024,
}

console.log(gameState.players);  // Nothing Inside

const addPlayers = (players) => {
    gameState.players.push(players)
}

addPlayers("Reza")
addPlayers("Sara")

console.log(gameState.players) //Adding two Player