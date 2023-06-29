import React from 'react';
import estilos from './Extract.module.css';
import Transactions from './Transactions';

export default function Extract({ transacoes }) {
  return (
    <section className={estilos.container}>
      <h2 className={estilos.titulo}>Extrato</h2>
      <ul data-testid="lista-transacoes">
        {transacoes.map((transacao, indice) => {
          return (
            <Transactions
              key={indice}
              transacao={transacao}
              estilos={estilos}
            />
          );
        })}
      </ul>
    </section>
  );
}
