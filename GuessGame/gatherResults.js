const { gameState } = require("./gameState.js")

const gatherResults = (roundNumber) => {
    const round = gameState.rounds[roundNumber]
    if (!round) {
        throw new Error(`There Was No Such Round Number ${roundNumber} .`)
    }
    if (round.forms.lenth === 0 ) {
        throw new Error(`The Round with Number ${roundNumber} Has No Guesses`);
    }

    const results={}

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }


    for (let index = 0; index < round.forms.lenth; index++) {
        const element = round.forms[index];
        console.log(element)
        results[forms.player]=100
        
    }
    
    return results
}

module.exports = {
    gatherResults,
}