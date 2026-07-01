import React, { useState } from 'react';

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" }
  ]);

  const adicionarFuncionario = () => {
    const novoFuncionario = { id: funcionarios.length + 1, nome: "Novo Funcionário" };
    setFuncionarios([...funcionarios, novoFuncionario]);
  };

  const editarFuncionario = (id) => {
    setFuncionarios(funcionarios.map(f => f.id === id ? { ...f, nome: f.nome + " (editado)" } : f));
  };

  const excluirFuncionario = (id) => {
    setFuncionarios(funcionarios.filter(f => f.id !== id));
  };

  return (
    <div>
      <h1>Gerenciamento de Funcionários</h1>
      <button onClick={adicionarFuncionario}>Adicionar Funcionário</button>
      <table border="1" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map(f => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.nome}</td>
              <td>
                <button onClick={() => editarFuncionario(f.id)}>Editar</button>
                <button onClick={() => excluirFuncionario(f.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
