var inp1 = document.querySelector("main div .n1")
var inp2 = document.querySelector("main div .n2")
var bt1 = document.querySelector("main div .b1")
var bt2 = document.querySelector("main div .b2")
var ver = document.querySelector("main .ver")
var txt = document.querySelector("div.texto")

function mudarTexto1() {
  texto1 = inp1.value.toUpperCase() + " "
  inp1.value = ""
}

function mudarTexto2() {
    texto2 = inp2.value.toUpperCase() + "!!"
    inp2.value = ""
}

bt1.onclick = mudarTexto1
bt2.onclick = mudarTexto2

ver.addEventListener("click", () => txt.innerText = texto1 + texto2 )
