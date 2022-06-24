function novo_desafio () {
    basic.clearScreen()
    for (let y = 0; y <= 4; y++) {
        led.plotBrightness(2, y, 40)
    }
    falha_y = randint(0, 3) + 1
    led.unplot(2, falha_y)
}
input.onButtonPressed(Button.A, function () {
    if (!(iniciado)) {
        iniciado = true
        executar_funcoes()
    }
})
function verificar_resultado () {
    if (pressionado_y == falha_y) {
        pressionado_y = 0
        game.addScore(1)
        basic.pause(1000)
        velocidade += -20
        executar_funcoes()
    } else {
        basic.pause(1000)
        solucao_desafio()
        basic.pause(1000)
        game.gameOver()
    }
}
function iniciar_movimento () {
    for (let y = 0; y <= 4; y++) {
        copiay = y
        led.plotBrightness(2, y, 40)
        basic.pause(velocidade)
    }
}
function contagem_regressiva () {
    basic.pause(1000)
    for (let indice = 0; indice <= 2; indice++) {
        basic.showNumber(3 - indice)
    }
    basic.clearScreen()
}
function solucao_desafio () {
    basic.clearScreen()
    for (let indice = 0; indice <= 4; indice++) {
        led.plotBrightness(2, indice, 255)
    }
    led.unplot(2, falha_y)
}
input.onButtonPressed(Button.B, function () {
    if (iniciado) {
        pressionado_y = copiay
        led.unplot(2, pressionado_y)
    }
})
function executar_funcoes () {
    novo_desafio()
    contagem_regressiva()
    iniciar_movimento()
    verificar_resultado()
}
let copiay = 0
let pressionado_y = 0
let falha_y = 0
let velocidade = 0
let iniciado = false
iniciado = false
velocidade = 500
game.setScore(0)
basic.showArrow(ArrowNames.West)
