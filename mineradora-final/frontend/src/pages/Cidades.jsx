import React, { useState } from 'react';

export default function Cidades() {
  const [cidades, setCidades] = useState([
    { id: 1, nome: "Crateús" },
    { id: 2, nome: "Fortaleza" }
  ]);

  const adicionarCidade = () => {
    const novaCidade = { id: cidades.length + 1, nome: "Nova Cidade" };
    setCidades([...cidades, novaCidade]);
  };

  const editarCidade = (id) => {
    setCidades(cidades.map(c => c.id === id ? { ...c, nome: c.nome + " (editada)" } : c));
  };

  const excluirCidade = (id) => {
    setCidades(cidades.filter(c => c.id !== id));
  };

  return (
    <div>
      <h1>Gerenciamento de Cidades</h1>
      <button onClick={adicionarCidade}>Adicionar Cidade</button>
      <table border="1" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cidades.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nome}</td>
              <td>
                <button onClick={() => editarCidade(c.id)}>Editar</button>
                <button onClick={() => excluirCidade(c.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
