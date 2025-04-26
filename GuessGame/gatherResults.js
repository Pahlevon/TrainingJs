const { gameState } = require("./gameState.js")

const gatherResults = (roundNumber) => {
    const round = gameState.rounds[roundNumber]
    if (!round) {
        throw new Error(`There Was No Such Round Number ${roundNumber} .`)
    }
    if (round.forms.lenth === 0 ) {
        throw new Error(`The Round with Number ${roundNumber} Has No Guesses`);
    }

    for (let index = 0; index < round.forms.lenth; index++) {
        const element = round.forms.lenth[index];
        console.log(element)
        
    }
}

module.exports = {
    gatherResults,
}