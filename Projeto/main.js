let genius = document.querySelector("div.genius")
let bts = genius.querySelectorAll("div.genius > *:not(.pontuacao)")
let pontuacao = document.querySelector("div.genius >.pontuacao")
let sequencia = [rng(), rng()]
let velocidade = 500

function rng() {
    return Math.floor(Math.random() * 4)
}

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


function apresentarSequencia() {
    let index = 0
    let interval = null
  
    return new Promise((resolve, reject) => {
      function piscarCorAtual() {
        if (index >= sequencia.length) {
          clearInterval(interval)
          resolve()
          return
        }
        let atual = sequencia[index++]
        piscar(atual)
      }
      interval = setInterval(piscarCorAtual, velocidade + 300)
    })
}
  
let currentIndex = 0
  
genius.addEventListener("click", (ev) => {
    if (estado != "jogando")
      return
  
    const buttonIndex = [...bts].indexOf(ev.target)
  
    if (buttonIndex < 0)
      return
  
  
    if (buttonIndex != sequencia[currentIndex++]) {
      estado = "derrota"
      pontuacao.innerHTML = "PERDEU!"
      return
    }
  
    if (currentIndex == sequencia.length) {
      estado = "apresentando sequencia"
      currentIndex = 0
      iniciar()
      return
    }
})
  
let estado = "apresentando sequencia"
  
async function iniciar() {
    sequencia.push(rng())
    if (estado == "apresentando sequencia") {
      estado = "..."
      pontuacao.innerHTML = "..."
      await apresentarSequencia()
      estado = "jogando"
      pontuacao.innerHTML = "Jogue"
      return
    }
}
  
pontuacao.addEventListener("click", iniciar)

//console.log(Math.floor(Math.random() * 3));


/*function apresentarSequencia () {
    let index = 0 /*Posiçao atual do array
    let interval = setInterval(function () { /*Inicia a leitura do intervalo
        if (index >= ordem.length) { /*Compara a ordem da sequencia atual, com a sequencia ja dfinida
            clearInterval(interval) /*Limpa a sequencia de leitura
            return
        }
        let atual = ordem[index++] /*Pega o valor da posicao atual e soma +1
        piscar(atual)
    }, velocidade + 300)
}

let estado = "apresentando sequencia"

pontuacao.addEventListener("click", async () => {
    if (estado == "apresentando sequencia") {
        estado = "..."
        pontuacao.innerHTML = "..."
        await apresentarSequencia()
        estado = "jogando"
    }
})*/