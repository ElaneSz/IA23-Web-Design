let bts = document.querySelectorAll("div.genius > *:not(.pontuacao)")
let ordem = [ 0, 3, 1, 2]
let velocidade = 1000

function ligar (item) {
    bts[item].classList.add("on") /*Adiciona a classe '.on'*/
}

function desligar (item) {
    bts[item].classList.remove("on") /*Remove a classe '.on'*/
}

function piscar(item) {
    ligar(item)
    setTimeout(function () { desligar(item) }, velocidade) /*Depois de determinado intervalo de tempo, ele desliga*/
}

function apresentarSequencia () {
    let index = 0 /*Posiçao atual do array*/
    let interval = setInterval(function () { /*Inicia a leitura do intervalo*/
        if (index >= ordem.length) { /*Compara a ordem da sequencia atual, com a sequencia ja dfinida*/
            clearInterval(interval) /*Limpa a sequencia de leitura*/
            return
        }
        let atual = ordem[index++] /*Pega o valor da posicao atual e soma +1*/
        piscar(atual)
    }, velocidade + 300)
}