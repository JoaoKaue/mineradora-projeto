const API_URL = "http://localhost:3000"

export const equipamentoService = {
  listar: async () => {
    const response = await fetch(`${API_URL}/equipamentos`)
    return await response.json()
  },
  criar: async (equipamento) => {
    const response = await fetch(`${API_URL}/equipamentos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(equipamento)
    })
    return await response.json()
  },
  atualizar: async (id, equipamento) => {
    const response = await fetch(`${API_URL}/equipamentos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(equipamento)
    })
    return await response.json()
  },
  deletar: async (id) => {
    const response = await fetch(`${API_URL}/equipamentos/${id}`, {
      method: "DELETE"
    })
    return await response.json()
  }
}
