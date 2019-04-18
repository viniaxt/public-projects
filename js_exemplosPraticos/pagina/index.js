const integrantes = [
  "vinicius",
  "arthur",
  "valcir",
  "marcel",
  "marcelo",
  "roberto",
  "jackson",
  "janderson",
  "valcinei",
  "vandercleia"
]

const temas = [
  "javascript",
  "java",
  "html",
  "css",
  "jquery",
  "bootstrap",
  "ajax",
  "gulp",
  "webpack",
  "git"
]

const alterarIntegrante = () => {
  if (integrantes.length != 0) {
    let i = Math.floor(Math.random() * integrantes.length)
    let valorIntegranteAtual = integrantes[i].toUpperCase()
    $("#valorIntegrante").html(`${valorIntegranteAtual}`)
    integrantes.splice(i, 1)
  } else {
    $("#valorIntegrante").html("FIM!")
  }
}

const alterarTema = () => {
  if (temas.length != 0) {
    let i = Math.floor(Math.random() * temas.length)
    let valorTemaAtual = temas[i].toUpperCase()
    $("#valorTema").html(`${valorTemaAtual}`)
    temas.splice(i, 1)
  } else {
    $("#valorTema").html("FIM!")
  }
}

$("#changeTema").click(() => {
  alterarTema()
})

$("#adicionarIntegrante").click(() => {
  integrantes.push($("#integranteDigitado").val())
  console.log(integrantes)
})

$("#changeIntegrante").click(() => {
  alterarIntegrante()
})

$("#adicionarTema").click(() => {
  temas.push($("#temaDigitado").val())
  console.log(temas)
})

alterarIntegrante()
alterarTema()
