import React from 'react';
import './Inicio.css'; // importa o CSS específico

export default function Inicio() {
  return (
    <div className="inicio-container">
      <h1 className="inicio-titulo">Sistema Integrado da Mineradora</h1>
      <p className="inicio-texto">
        Bem-vindo ao painel de controle. Utilize o menu acima para gerenciar os recursos.
      </p>
    </div>
  );
}
