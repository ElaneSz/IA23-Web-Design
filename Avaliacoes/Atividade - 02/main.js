var bt = document.querySelector("main div button")
var inp1 = document.querySelector("main div .n1")
var inp2 = document.querySelector("main div .n2")
var txt = document.querySelector("div.texto")

function mudarTexto() {
  txt.innerText = inp1.value.toUpperCase() + " " + inp2.value.toUpperCase() + "!!"
  texto = txt.innerText
  inp1.value = ""
  inp2.value = ""
}

bt.onclick = mudarTexto

bt.addEventListener("click", () => txt.innerText = texto )
