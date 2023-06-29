import React from 'react';
import Form from './Form';
import estilos from './Transactions.module.css';
import { ReactComponent as Ilustracao } from './ilustracao.svg';

export default function Transactions({ realizarTransacao }) {
  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={estilos.wrapper}>
        <Form realizarTransacao={realizarTransacao} />
      </div>
      <Ilustracao height="229" width="459" />
      <div className="detalhe__inferior" />
    </section>
  );
}
