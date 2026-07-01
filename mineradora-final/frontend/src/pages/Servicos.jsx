import React, { useState } from 'react';

export default function Servicos() {
  const [servicos, setServicos] = useState([
    { id: 1, nome: "Transporte" },
    { id: 2, nome: "Manutenção" }
  ]);

  const adicionarServico = () => {
    const novoServico = { id: servicos.length + 1, nome: "Novo Serviço" };
    setServicos([...servicos, novoServico]);
  };

  const editarServico = (id) => {
    setServicos(servicos.map(s => s.id === id ? { ...s, nome: s.nome + " (editado)" } : s));
  };

  const excluirServico = (id) => {
    setServicos(servicos.filter(s => s.id !== id));
  };

  return (
    <div>
      <h1>Gerenciamento de Serviços</h1>
      <button onClick={adicionarServico}>Adicionar Serviço</button>
      <table border="1" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nome}</td>
              <td>
                <button onClick={() => editarServico(s.id)}>Editar</button>
                <button onClick={() => excluirServico(s.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
