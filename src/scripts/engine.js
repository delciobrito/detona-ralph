const state = {
    view: {
        square: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },

    value: {
        timeId: null,
        gameVelocity: 1000,
    }
}

// obter um quadrado aleatório para ter um inimigo
function randomSquare() {
    state.view.square.forEach((square) => {

        // primeiro removendo a classe 'enemy' de todos os quadrados
        square.classList.remove("enemy")
    })

    let randomNumber = Math.floor(Math.random() * 9)
    let randomSquare = state.view.square[randomNumber];
    randomSquare.classList.add("enemy")
}

// função para mover o inimigo
/*function moveEnemy() {
    state.value.timeId = setInterval(randomSquare, 1000)
}
*/

// outra maneira de mover o inimigo
function moveEnemy() {
    state.value.timeId = setInterval(randomSquare, state.value.gameVelocity)
}

function addListenerHitBox() {
    state.view.square.forEach((square) => {

    })
}

function initialize() {
    moveEnemy()
}

initialize()