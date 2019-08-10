const sequence = {
  _id: 1,
  get id() { return this._id++ }
}

const clientes = {}

function salvarCliente(cliente) {
  if (!cliente.id) cliente.id = sequence.id
  clientes[cliente.id] = cliente
  return cliente
}

function getCliente(id) {
  return clientes[id] || {}
}

function getClientes() {
  return Object.values(clientes)
}

function excluirCliente(id) {
  const cliente = clientes.id
  delete clientes[id]
  return cliente
}

module.exports = { salvarCliente, getCliente, getClientes, excluirCliente }