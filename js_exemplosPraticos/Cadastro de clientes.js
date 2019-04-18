class Cliente {
  constructor(nome, valorPedido) {
    this.nome = nome
    this.valorPedido = valorPedido
  }
}

class entradaCliente {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.clientes = []
  }

  addClientes(...clientes) {
    clientes.forEach(i => this.clientes.push(i))
  }

  sumarioPedidos() {
    let valorPedidosTotal = 0
    this.clientes.forEach(i => valorPedidosTotal += i.valorPedido)
    return valorPedidosTotal
  }
}

const cliente1 = new Cliente('jureia', 30000)
const cliente2 = new Cliente('Farbe', 10000)

const clientes = new entradaCliente(03, 2019)

clientes.addClientes(cliente1, cliente2)
console.log(clientes)


console.log(`Recebemos R$${clientes.sumarioPedidos()} neste mes.`)