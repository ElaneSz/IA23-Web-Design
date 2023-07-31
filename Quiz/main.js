const pergunta = document.querySelector(".pergunta")
const alternativas = document.querySelector(".alternativas")

const contador = document.querySelector(".contador")
const corretas = contador.querySelector(".corretas")
const erradas = contador.querySelector(".erradas")

async function main() {
  const requisicao = await fetch("questoes.json")
  const quiz = await requisicao.json()
  
  let questaoAtual = 0
  let alternativaCorretaAtual
  let nCorretas = 0
  let nErradas = 0

  function carregarQuestao(numeroDaQuestao) {
    const questao = quiz[numeroDaQuestao]
    alternativaCorretaAtual = questao.correta
    pergunta.innerHTML = questao.pergunta

    alternativas.innerHTML = ""
    //quiz[0].alternativas.forEach(alt => alternativas.innerHTML += `<button>${alt}</button>`);
    /*for (let i = 0; i <= 9; i++) {
      alternativas.innerHTML += `<button>${alt.alternativas[i]}</button>`
    }*/
    questao.alternativas.forEach(alt => {
        alternativas.innerHTML += `<button>${alt}</button>`
    });

  }

  alternativas.addEventListener("click", ev => {
    const botaoClicado = ev.target.closet("botton")
    if (!botaoClicado)
        return

    const listaDeFilhos = [...alternativas.children] // Posição dos botoes e convertendo o que achou, em array
    const alternativaCorretaClicada = listaDeFilhos.indexOf(botaoClicado) // Com o valor eu encontro a posição do array
    if (alternativaCorretaClicada == alternativaCorretaAtual)
        nCorretas++
        corretas.innerHTML = nCorretas
        return carregarQuestao(++questaoAtual) // Carrega para a proxima questao
    erradas.innerHTML = nErradas
    nErradas++
  })

  carregarQuestao(questaoAtual)
}

main()