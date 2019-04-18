class Lancamento {
  constructor(nome, valor) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos) {  // OS 3 PONTOS SAO NECESSARIOS!!!!!!!!
    lancamentos.forEach(i => this.lancamentos.push(i))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(i => { valorConsolidado += i.valor })
    return valorConsolidado
  }
}

const escola = new Lancamento('Escola', -1000)
const salario = new Lancamento('Salario', 4000)

const contas = new CicloFinanceiro(06, 2019)   //criamos um ciclo novo para incluir os novos lancamentos em uma constante
contas.addLancamentos(escola, salario) //Com a constante criada, podemos utilizar a funcao

console.log(contas)
console.log(`Seu saldo final é R$${contas.sumario()}`)