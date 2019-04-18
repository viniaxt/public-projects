const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/clientes', (req, res, next) => {
  res.send(bancoDeDados.getClientes())
})

app.get('/clientes:id', (req, res, next) => {
  res.send(bancoDeDados.getCliente(req.params.id))
})

app.post('/clientes', (req, res, next) => {
  const cliente = bancoDeDados.salvarCliente({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(cliente)      //convertendo para JSON
})

app.put('/clientes/:id', (req, res, next) => {
  const cliente = bancoDeDados.salvarCliente({
    nome: req.body.nome,
    preco: req.body.preco,
    id: req.params.id
  })
  res.send(cliente)     //convertendo para JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const cliente = bancoDeDados.excluirCliente(req.params.id)
  res.send(cliente)    //convertendo para JSON
})

app.listen(porta, () => {
  console.log(`O servido esta executando na porta ${porta}`)
})