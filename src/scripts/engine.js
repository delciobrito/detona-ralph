const state = {
    view: {
        square: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },

    value: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 30,
    },
    
    action: {
        timeId: null,
        countDownTimerId: setInterval(countDown, 1000),
    }
}

// function playSound() {
//     let audio = new Audio("./src/audios/hit.m4a")
//     // tratanto o volume do som
//     audio.volume = 0.2
//     // precisa chamar o audio
//     audio.play()
// }

// outra maneira de implementar o áudio de maneira mais dinâmica
function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`)
    audio.volume = 0.2
    audio.play()
}

// função para fazer o tempo diminuir, e esta função é chamada pelo objeto 'state'
function countDown() {
    // guarda o tempo e decrementa ele
    state.value.currentTime--;
    // mostra o tempo sendo decrementado
    state.view.timeLeft.textContent = state.value.currentTime
    // verifica se o tempo acabou
    if(state.value.currentTime <= 0) {
        // limpando os intervalos
        clearInterval(state.action.countDownTimerId)
        clearInterval(state.action.timeId)
        alert("O tempo acabou! Sua pontuação é " + state.value.result)
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
    state.action.timeId = setInterval(randomSquare, state.value.gameVelocity)
}

function addListenerHitBox() {
    state.view.square.forEach((square) => {

        // escuta quando o mouse é clicado em um dos quadrados
        square.addEventListener("mousedown", () => {
            if(square.id === state.value.hitPosition) {
                state.view.score.textContent = state.value.result++
                
                // para impedir que o jogador fique clicando mais de uma vez somando pontos infinitamente
                state.value.hitPosition = null
                playSound("hit")
            }
        })
    })
}

function initialize() {
    moveEnemy()
    addListenerHitBox()
}

initialize()