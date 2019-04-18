// -----ARRAY------

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

console.log("---forEach---")
aprovados.forEach(nome => console.log(nome))

console.log("---push---")
aprovados.push('Anderson')
console.log(aprovados)

const produtos = [
  { nome: 'notebook', preco: 2499, fragil: true },
  { nome: 'iPad pro', preco: 4199, fragil: true },
  { nome: 'Copo de vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

console.log("---map---")
const apenasPreco = produto => produto.preco
console.log(produtos.map(apenasPreco))

console.log("---filter---")
const naoFragil = produto => produto.fragil == false
console.log(produtos.filter(naoFragil))

console.log("---reduce---")
const maisBarato = (func, funcAtual) => {
  return func.preco < funcAtual.preco ? func : funcAtual
}
console.log(produtos.reduce(maisBarato))

