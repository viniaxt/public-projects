const valorTotal = 50


function randomizarValorArray(qtdeDigitada) {
  const arrayDeValores = []
  const tamanho = 5 // i.length

  var j = 0
  var valorRestante = 1 // (n1 + n2 + n.. = 1)

  while (j != tamanho - 1) {
    var valorPosicaoAtual = Math.random()

    while ((valorRestante - valorPosicaoAtual) < 0) {
      valorPosicaoAtual = Math.random()
      // console.log(valorPosicaoAtual)
    }
    valorRestante -= valorPosicaoAtual
    arrayDeValores[j] = Math.round(valorPosicaoAtual * qtdeDigitada)
    j++
  }
  if (j == tamanho - 1) {
    arrayDeValores[j] = Math.round(valorRestante * qtdeDigitada)
  }

  return arrayDeValores
}
console.log(randomizarValorArray(100))