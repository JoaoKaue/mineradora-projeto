import express from 'express'
import cors from 'cors'
import { equipamentoService } from './services/api.js'

const app = express()
app.use(cors())
app.use(express.json())

// Listar equipamentos
app.get('/equipamentos', async (req, res) => {
  try {
    const { data, error } = await equipamentoService.listar()
    if (error) throw error
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Criar equipamento
app.post('/equipamentos', async (req, res) => {
  try {
    const { nome, setor } = req.body
    const { data, error } = await equipamentoService.criar({ nome, setor })
    if (error) throw error
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Atualizar equipamento
app.put('/equipamentos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { nome, setor } = req.body
    const { data, error } = await equipamentoService.atualizar(id, { nome, setor })
    if (error) throw error
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Deletar equipamento
app.delete('/equipamentos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { data, error } = await equipamentoService.deletar(id)
    if (error) throw error
    res.json({ message: "Equipamento deletado com sucesso", data })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(3000, () => {
  console.log('Backend rodando em http://localhost:3000')
})
