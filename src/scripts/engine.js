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
        hitPosition: 0,
        result: 0,
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

    state.value.hitPosition = randomSquare.id
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

        // escuta quando o mouse é clicado em um dos quadrados
        square.addEventListener("mousedown", () => {
            if(square.id === state.value.hitPosition) {
                state.view.score.textContent = state.value.result++

                // para impedir queo jogador fique clicando mais de uma vez somando pontos infinitamente
                state.value.hitPosition = null
            }
        })
    })
}

function initialize() {
    moveEnemy()
    addListenerHitBox()
}

initialize()