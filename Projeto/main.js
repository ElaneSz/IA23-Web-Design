let bts = document.querySelectorAll("div.genius > *:not(.pontuacao)")

function ligar (item) {
    bts[item].classList.add("on") /*Adiciona a classe '.on'*/
}

function desligar (item) {
    bts[item].classList.remove("on") /*Remove a classe '.on'*/
}

function piscar(item) {
    ligar(item)
    setTimeout(function () { desligar(item) }, 1000) /*Depois de determinado intervalo de tempo, ele desliga*/
}