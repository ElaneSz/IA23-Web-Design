const elQuiz = document.querySelector(".quiz")
const elPergunta = elQuiz.querySelector(".pergunta")
const elNumero = elQuiz.querySelector(".numero")
const elAlternativas = elQuiz.querySelector(".alternativas")
const elContador = elQuiz.querySelector(".contador")
const elCorretas = elContador.querySelector(".corretas")
const elErradas = elContador.querySelector(".erradas")

const elModalFinish = document.querySelector(".modal-finish")
const elContadorFinish = elModalFinish.querySelector(".contador")
const elCorretasFinish = elContadorFinish.querySelector(".corretas")
const elErradasFinish = elContadorFinish.querySelector(".erradas")

const questionNumberSpan = document.querySelector(".current-question");

async function main() {
  const requisicao = await fetch("questoes.json") // Realiza a requisição do arquivo '.json'
  const quiz = await requisicao.json() // Converte para '.json'
  
  // Variaveis globais
  let nCorretas = 0
  let nErradas = 0
  let questaoAtual = 0
  let alternativaCorretaAtual

  elCorretas.innerHTML = nCorretas
  elErradas.innerHTML = nErradas

  function carregarQuestao(numeroDaQuestao) { // Função que vai carregar as questoes do arquivo '.json'
    const questao = quiz[numeroDaQuestao]
    alternativaCorretaAtual = questao.correta
    elPergunta.innerText = questao.pergunta
    elAlternativas.innerHTML = ""
    elNumero.innerHTML = `<h1>(${questaoAtual+1})</h1>` // Acrescenta o numero da questao
    questao.alternativas.forEach(alt => {
      elAlternativas.innerHTML += `<button>${alt}</button>` // Para cada alternativa se cria um botao
    })
  }

  elAlternativas.addEventListener("click", ev => {
    const botaoClicado = ev.target.closest("button") // Se for um botao ele continua o evento
    if (!botaoClicado) return // Se nao for um botao ele para

    const listaDeFilhos = [...elAlternativas.children] // Metodo desconstrutor
    const alternativaCorretaClicada = listaDeFilhos.indexOf(botaoClicado) // Cria um array de alternativas

    if (alternativaCorretaClicada == alternativaCorretaAtual) {  // Verificar se a alternativa clicada foi a correta
      nCorretas++ // contabiliza o nº de alternativas clicadas que sao corretas | E adiciona +1
      elCorretas.innerHTML = nCorretas
      if (questaoAtual == quiz.length-1) {
        elCorretasFinish.innerHTML = nCorretas
        elErradasFinish.innerHTML = nErradas
        return elModalFinish.classList.add("open")
      }
      return carregarQuestao(++questaoAtual)
    }
    
    nErradas++
    elErradas.innerHTML = nErradas
  })

  carregarQuestao(questaoAtual) // Executa a função
}

main()